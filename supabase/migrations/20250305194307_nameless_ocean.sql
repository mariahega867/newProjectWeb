/*
  # Create RSS feeds table and refresh function

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
      - `created_at` (timestamptz, default now())
      - `image_url` (text)

  2. Functions
    - `refresh_rss_feeds`: Stored procedure to refresh RSS feed items
      - Accepts array of feed items
      - Handles atomic updates
      - Maintains data consistency

  3. Security
    - Enable RLS (if not already enabled)
*/

-- Create RSS feeds table if it doesn't exist
DO $$ BEGIN
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
EXCEPTION
  WHEN duplicate_table THEN NULL;
END $$;

-- Enable Row Level Security (if not already enabled)
DO $$ BEGIN
  ALTER TABLE rss_feeds ENABLE ROW LEVEL SECURITY;
EXCEPTION
  WHEN invalid_parameter_value THEN NULL;
END $$;

-- Drop existing policy if it exists and create a new one
DO $$ BEGIN
  DROP POLICY IF EXISTS "Allow public read access" ON rss_feeds;
  
  CREATE POLICY "Allow public read access" ON rss_feeds
      FOR SELECT
      TO public
      USING (true);
EXCEPTION
  WHEN undefined_object THEN NULL;
END $$;

-- Create type for feed items if it doesn't exist
DO $$ BEGIN
    CREATE TYPE feed_item AS (
        title text,
        link text,
        content text,
        content_snippet text,
        pub_date timestamptz,
        creator text,
        categories text[],
        image_url text
    );
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

-- Create or replace the refresh function
CREATE OR REPLACE FUNCTION refresh_rss_feeds(items feed_item[])
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Clear existing entries
    DELETE FROM rss_feeds;
    
    -- Insert new items
    INSERT INTO rss_feeds (
        title,
        link,
        content,
        content_snippet,
        pub_date,
        creator,
        categories,
        image_url
    )
    SELECT
        item.title,
        item.link,
        item.content,
        item.content_snippet,
        item.pub_date,
        item.creator,
        item.categories,
        item.image_url
    FROM unnest(items) as item;
END;
$$;