import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { DOMParser } from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts';

const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
const RSS_FEED_URL = 'https://techcrunch.com/category/artificial-intelligence/feed/';

// Helper function to safely parse XML content
function safeParseXML(parser: DOMParser, content: string) {
  try {
    const doc = parser.parseFromString(content, 'text/xml');
    if (!doc) throw new Error('Failed to parse document');
    return doc;
  } catch (error) {
    console.error('XML parsing error:', error);
    throw new Error('Failed to parse RSS feed content');
  }
}

// Helper function to safely extract text content
function safeTextContent(element: Element | null): string {
  if (!element) return '';
  const content = element.textContent || '';
  return content.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1').trim();
}

// Helper function to extract first image URL from content
function extractFirstImage(content: string): string {
  if (!content) return '';
  
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = content.match(imgRegex);
  
  if (match && match[1]) {
    const url = match[1].trim();
    try {
      new URL(url);
      return url;
    } catch {
      return '';
    }
  }
  
  return 'https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/dd1f5ea3-c3de-4dbd-b66b-1d63f739ac00/public';
}

Deno.serve(async (req) => {
  // Define CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Max-Age': '86400',
  };

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      headers: corsHeaders,
      status: 204
    });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Method not allowed' 
      }), 
      { 
        status: 405,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { 
        auth: { persistSession: false }
      }
    );

    // Fetch RSS feed with timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    console.log('Fetching RSS feed...');
    const response = await fetch(
      CORS_PROXY + encodeURIComponent(RSS_FEED_URL),
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/rss+xml, application/xml, text/xml, */*'
        }
      }
    ).finally(() => clearTimeout(timeout));

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`);
    }

    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = safeParseXML(parser, text);
    const items = xmlDoc.querySelectorAll('item');

    if (!items || items.length === 0) {
      throw new Error('No items found in RSS feed');
    }

    console.log(`Found ${items.length} items in feed`);

    // Parse feed items
    const feedItems = Array.from(items)
      .map(item => {
        try {
          const content = safeTextContent(item.querySelector('content\\:encoded')) || 
                         safeTextContent(item.querySelector('description'));
          
          const title = safeTextContent(item.querySelector('title'));
          const link = safeTextContent(item.querySelector('link'));
          const pubDate = safeTextContent(item.querySelector('pubDate'));
          const creator = safeTextContent(item.querySelector('dc\\:creator'));
          const description = safeTextContent(item.querySelector('description'));
          
          const categories = Array.from(item.querySelectorAll('category'))
            .map(cat => safeTextContent(cat))
            .filter(Boolean);

          if (!title || !link || !content) {
            console.warn('Skipping invalid item:', { title, link });
            return null;
          }

          return {
            title,
            link,
            content,
            content_snippet: description,
            pub_date: pubDate ? new Date(pubDate).toISOString() : null,
            creator,
            categories,
            image_url: extractFirstImage(content)
          };
        } catch (error) {
          console.error('Error parsing feed item:', error);
          return null;
        }
      })
      .filter(Boolean);

    if (feedItems.length === 0) {
      throw new Error('No valid items found in RSS feed');
    }

    console.log(`Processing ${feedItems.length} valid items`);

    // Clear existing entries
    const { error: deleteError } = await supabaseClient
      .from('rss_feeds')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');

    if (deleteError) {
      console.error('Error deleting existing entries:', deleteError);
      throw deleteError;
    }

    // Insert new items
    const { error: insertError } = await supabaseClient
      .from('rss_feeds')
      .insert(feedItems);

    if (insertError) {
      console.error('Error inserting new items:', insertError);
      throw insertError;
    }

    console.log('Successfully updated RSS feeds');

    return new Response(
      JSON.stringify({ 
        success: true,
        message: `Successfully updated ${feedItems.length} articles`
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );

  } catch (error) {
    console.error('Error in update-rss-feed function:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to update RSS feed'
      }),
      { 
        status: error.status || 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );
  }
});