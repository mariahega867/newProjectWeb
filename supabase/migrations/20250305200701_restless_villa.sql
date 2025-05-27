/*
  # Create RSS feeds table

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

-- Create RSS feeds table
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

-- Create policy for public read access
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'rss_feeds' 
        AND policyname = 'Enable read access for all users'
    ) THEN
        CREATE POLICY "Enable read access for all users" 
        ON rss_feeds FOR SELECT 
        USING (true);
    END IF;
END $$;