/*
  # RSS Feed Storage Schema

  1. New Tables
    - `rss_feeds`
      - `id` (uuid, primary key)
      - `title` (text)
      - `link` (text)
      - `content` (text)
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

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON rss_feeds
  FOR SELECT
  TO public
  USING (true);