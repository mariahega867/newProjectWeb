/*
  # Create RSS Feeds table

  1. New Tables
    - `rss_feeds`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `link` (text, not null)
      - `content` (text, not null)
      - `content_snippet` (text)
      - `pub_date` (timestamptz)
      - `creator` (text)
      - `categories` (text[])
      - `created_at` (timestamptz)
      - `image_url` (text)

  2. Security
    - Enable RLS on `rss_feeds` table
    - Add policy for public read access
*/

-- Create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS rss_feeds (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  link text NOT NULL,
  content text NOT NULL,
  content_snippet text,
  pub_date timestamptz,
  creator text,
  categories text[],
  created_at timestamptz DEFAULT now(),
  image_url text
);

-- Enable Row Level Security
ALTER TABLE rss_feeds ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists and create a new one
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Allow public read access" ON rss_feeds;
  
  CREATE POLICY "Allow public read access"
    ON rss_feeds
    FOR SELECT
    TO public
    USING (true);
END $$;

-- Clear existing data and insert test data
DELETE FROM rss_feeds;

INSERT INTO rss_feeds (title, link, content, content_snippet, pub_date, creator, categories, image_url) VALUES
(
  'AI Breakthrough: New Language Model Sets Performance Records',
  'https://techcrunch.com/2024/03/15/ai-breakthrough',
  'A new language model has achieved unprecedented performance across multiple benchmarks, setting new standards for AI capabilities...',
  'A new language model has achieved unprecedented performance across multiple benchmarks...',
  NOW(),
  'John Smith',
  ARRAY['AI', 'Machine Learning', 'Technology'],
  'https://images.unsplash.com/photo-1677442136019-21780ecad995'
),
(
  'Tech Giants Collaborate on AI Safety Standards',
  'https://techcrunch.com/2024/03/14/ai-safety-standards',
  'Leading technology companies have announced a joint initiative to develop comprehensive safety standards for AI development...',
  'Leading technology companies have announced a joint initiative...',
  NOW() - INTERVAL '1 day',
  'Sarah Johnson',
  ARRAY['AI Safety', 'Technology', 'Industry News'],
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485'
),
(
  'AI in Healthcare: Revolutionary Diagnostic Tool Approved',
  'https://techcrunch.com/2024/03/13/ai-healthcare-diagnostic',
  'A groundbreaking AI-powered diagnostic tool has received regulatory approval, promising to transform healthcare delivery...',
  'A groundbreaking AI-powered diagnostic tool has received regulatory approval...',
  NOW() - INTERVAL '2 days',
  'Dr. Michael Chen',
  ARRAY['Healthcare', 'AI', 'Medical Technology'],
  'https://images.unsplash.com/photo-1551190822-a9333d879b1f'
);