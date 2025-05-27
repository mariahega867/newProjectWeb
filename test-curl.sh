#!/bin/bash

# Get the anon key from .env file
ANON_KEY=$(grep VITE_SUPABASE_ANON_KEY .env | cut -d '=' -f2)

if [ -z "$ANON_KEY" ]; then
  echo "Error: VITE_SUPABASE_ANON_KEY not found in .env file"
  exit 1
fi

echo "Testing RSS feed update endpoint..."
echo "-----------------------------------"

# Make the curl request
curl -X POST \
  -H "Authorization: Bearer $ANON_KEY" \
  -H "Content-Type: application/json" \
  https://atvckpjxkkuxxdzvxlzb.functions.supabase.co/update-rss-feed