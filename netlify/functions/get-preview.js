
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

exports.handler = async function (event) {
  const { id } = event.queryStringParameters;
  try {
    const { data, error } = await supabase
      .from('previews')
      .select('title, content')
      .eq('id', id)
      .single();
    if (error) throw error;
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Preview not found' }),
    };
  }
};
