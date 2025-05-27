/*
  # Create RSS Feeds Table

  1. New Tables
    - `rss_feeds`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `link` (text, required)
      - `content` (text, required)
      - `content_snippet` (text, optional)
      - `pub_date` (timestamptz, optional)
      - `creator` (text, optional)
      - `categories` (text[], optional)
      - `created_at` (timestamptz, default: now())
      - `image_url` (text, optional)

  2. Security
    - Enable RLS on `rss_feeds` table
    - Add policy for public read access
*/

-- Create the RSS feeds table
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

-- Create policy to allow public read access
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'rss_feeds' 
    AND policyname = 'Allow public read access'
  ) THEN
    CREATE POLICY "Allow public read access"
      ON rss_feeds
      FOR SELECT
      TO public
      USING (true);
  END IF;
END $$;