const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

exports.handler = async function (event) {
  console.log('Received body:', event.body);
  const { id, title, content } = JSON.parse(event.body);
  try {
    console.log('Saving to Supabase:', { id, title, content });
    const { error } = await supabase
      .from('previews')
      .upsert({ id, title, content, approved: false }, { onConflict: 'id' });
    if (error) {
      console.error('Supabase error:', error.message);
      throw error;
    }
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error('Handler error:', error.message);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}