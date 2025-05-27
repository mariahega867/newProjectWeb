import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const REQUIRED_ENV_VARS = [
  'VITE_SUPABASE_URL',
  'VITE_SUPABASE_ANON_KEY'
];

async function verifyConfig() {
  console.log('Verifying Supabase Configuration');
  console.log('-------------------------------\n');

  // Check environment variables
  const missingVars = REQUIRED_ENV_VARS.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:');
    missingVars.forEach(varName => console.error(`   - ${varName}`));
    process.exit(1);
  }

  console.log('✅ Environment variables present');

  // Verify URL format
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  try {
    new URL(supabaseUrl);
    console.log('✅ Supabase URL format is valid');
  } catch {
    console.error('❌ Invalid Supabase URL format:', supabaseUrl);
    process.exit(1);
  }

  // Extract project ID
  const projectId = supabaseUrl.match(/https:\/\/(.*?)\.supabase\.co/)?.[1];
  if (!projectId) {
    console.error('❌ Could not extract project ID from URL');
    process.exit(1);
  }
  console.log('ℹ️  Project ID:', projectId);

  // Test Supabase connection
  try {
    const supabase = createClient(
      process.env.VITE_SUPABASE_URL,
      process.env.VITE_SUPABASE_ANON_KEY
    );

    const { data, error } = await supabase
      .from('rss_feeds')
      .select('count')
      .limit(1);

    if (error) throw error;

    console.log('✅ Successfully connected to Supabase');
    
    // Verify Edge Function URL
    const functionUrl = `https://${projectId}.functions.supabase.co/update-rss-feed`;
    console.log('\nEdge Function Information:');
    console.log('-------------------------');
    console.log('URL:', functionUrl);
    
    const response = await fetch(functionUrl, {
      method: 'OPTIONS',
      headers: {
        'Authorization': `Bearer ${process.env.VITE_SUPABASE_ANON_KEY}`
      }
    });

    if (response.ok) {
      console.log('✅ Edge Function endpoint is accessible');
    } else {
      console.error('❌ Edge Function endpoint is not accessible');
      console.error('   Status:', response.status);
      console.error('   Make sure the function is deployed and the project ID is correct');
    }

  } catch (error) {
    console.error('\n❌ Error connecting to Supabase:');
    console.error(error.message);
    process.exit(1);
  }
}

verifyConfig().catch(console.error);