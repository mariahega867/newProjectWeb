import dotenv from 'dotenv';
dotenv.config();

const ENDPOINT = 'https://atvckpjxkkuxxdzvxlzb.functions.supabase.co/update-rss-feed';
const ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

if (!ANON_KEY) {
  console.error('Error: VITE_SUPABASE_ANON_KEY not found in environment variables');
  process.exit(1);
}

async function testEndpoint() {
  try {
    console.log('Testing RSS feed update endpoint...');
    
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ANON_KEY}`
      }
    });

    const data = await response.json();
    
    console.log('\nResponse Status:', response.status);
    console.log('Response Headers:', Object.fromEntries(response.headers));
    console.log('\nResponse Body:', JSON.stringify(data, null, 2));
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    console.log('\n✅ Test completed successfully');
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    if (error.response) {
      console.error('Response:', await error.response.text());
    }
  }
}

testEndpoint();