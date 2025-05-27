/*
  # RSS Feeds Table Creation

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
      - `image_url` (text, optional)
      - `created_at` (timestamptz, default: now())
  
  2. Security
    - Enable RLS on `rss_feeds` table
    - Note: Public read access policy already exists
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
  image_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rss_feeds ENABLE ROW LEVEL SECURITY;