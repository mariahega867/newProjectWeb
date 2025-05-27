import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Loader2, ExternalLink, AlertCircle } from 'lucide-react';
// import DOMPurify from 'dompurify'; // Uncomment if using DOMPurify

type NewsItem = {
  id: string;
  title: string;
  link: string;
  content: string;
  content_snippet?: string;
  pub_date?: string;
  creator?: string;
  categories?: string[];
  image_url?: string;
};

const FALLBACK_IMAGE = 'https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/dd1f5ea3-c3de-4dbd-b66b-1d63f739ac00/public';
const RSS_URL = 'https://techcrunch.com/category/artificial-intelligence/feed/';
const PROXY_URL = 'https://api.allorigins.win/raw?url=';

export function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOGImage = async (link: string): Promise<string> => {
    try {
      const response = await fetch(`${PROXY_URL}${encodeURIComponent(link)}`);
      if (response.ok) {
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const ogImage = doc.querySelector('meta[property="og:image"]');
        return ogImage?.getAttribute('content') || FALLBACK_IMAGE;
      }
    } catch (err) {
      console.warn(`OG image fetch failed for ${link}:`, err);
    }
    return FALLBACK_IMAGE;
  };

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${PROXY_URL}${encodeURIComponent(RSS_URL)}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const text = await response.text();

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'text/xml');
      const items = xmlDoc.getElementsByTagName('item');

      const newsArray: NewsItem[] = await Promise.all(
        Array.from(items).slice(0, 3).map(async (item, index) => {
          const link = item.getElementsByTagName('link')[0]?.textContent || '#';
          const imageUrl = await fetchOGImage(link);

          return {
            id: index.toString(),
            title: item.getElementsByTagName('title')[0]?.textContent || 'No title',
            link,
            content: item.getElementsByTagName('description')[0]?.textContent || 'No content',
            pub_date: item.getElementsByTagName('pubDate')[0]?.textContent || '',
            creator: item.getElementsByTagName('dc:creator')[0]?.textContent || '',
            image_url: imageUrl
          };
        })
      );

      setNewsItems(newsArray);
      setError(null);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Oops! We couldn’t load the latest AI news. Please try again in a few moments.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const getReadingTime = (content: string): string => {
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number): string => {
    if (!text) return '';
    const plainText = text.replace(/<[^>]+>/g, '');
    // const cleanText = DOMPurify.sanitize(plainText, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
    const cleanText = plainText; // Replace with `cleanText` if using DOMPurify
    return cleanText.length <= maxLength ? cleanText : cleanText.substr(0, maxLength).trim() + '...';
  };

  const handleArticleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-white/90 backdrop-blur-sm border border-red-200 rounded-lg p-6 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchNews}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      );
    }

    if (newsItems.length === 0) {
      return (
        <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-8">
          <p className="text-gray-800 mb-4">No news articles available at the moment.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => handleArticleClick(item.link)}
          >
            <div className="relative h-48">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(item.pub_date)}</span>
                <Clock className="w-4 h-4 ml-4 mr-2" />
                <span>{getReadingTime(item.content)}</span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h2>
              <p className="text-gray-600 mb-4">
                {truncateText(item.content_snippet || item.content, 150)}
              </p>
              {item.creator && (
                <p className="text-sm text-gray-500 mb-4">By {item.creator}</p>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleArticleClick(item.link);
                }}
                className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors"
              >
                Read on TechCrunch <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
          </article>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative py-20 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${FALLBACK_IMAGE}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Latest AI News from TechCrunch
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              Stay updated with the latest developments in artificial intelligence
            </p>
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );
}