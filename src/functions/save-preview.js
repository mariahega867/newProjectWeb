
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

exports.handler = async function (event) {
  const { id, title, content } = JSON.parse(event.body);
  try {
    const { error } = await supabase
      .from('previews')
      .upsert({ id, title, content, approved: false }, { onConflict: 'id' });
    if (error) throw error;
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save preview' }),
    };
  }
};
