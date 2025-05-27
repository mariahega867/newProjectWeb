/*
  # Schedule RSS Feed Updates

  1. Changes
    - Add a CRON job to update RSS feeds daily at midnight UTC
    - The job will call our Edge Function to fetch and process new feed items

  2. Notes
    - The CRON job runs at 00:00 UTC every day
    - Uses Supabase's built-in pg_cron extension
*/

-- Enable the pg_cron extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Schedule the RSS feed update to run daily at midnight UTC
SELECT cron.schedule(
  'update-rss-feed',           -- unique job name
  '0 0 * * *',                -- CRON expression: At 00:00 every day
  $$
  SELECT
    net.http_post(
      url:='https://${PROJECT_REF}.functions.supabase.co/update-rss-feed',
      headers:='{"Content-Type": "application/json"}'::jsonb,
      body:='{}'::jsonb
    ) AS request_id;
  $$
);