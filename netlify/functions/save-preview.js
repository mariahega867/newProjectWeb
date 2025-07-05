const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

exports.handler = async function (event) {
  console.log('Received body:', event.body);
  const { id, approved } = JSON.parse(event.body);
  try {
    console.log('Updating Supabase:', { id, approved });
    const { error } = await supabase
      .from('previews')
      .update({ approved })
      .eq('id', id);
    if (error) throw error;
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': 'https://newwebai.netlify.app' },
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Handler error:', error.message);
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': 'https://newwebai.netlify.app' },
      body: JSON.stringify({ error: error.message })
    };
  }
};