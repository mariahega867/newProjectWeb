const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

exports.handler = async function (event) {
  const { id } = JSON.parse(event.body);
  try {
    const { data, error: fetchError } = await supabase
      .from('previews')
      .select('title, content')
      .eq('id', id)
      .single();
    if (fetchError) throw fetchError;

    const { error: insertError } = await supabase
      .from('posts')
      .insert({ id, title: data.title, content: data.content });
    if (insertError) throw insertError;

    const { error: deleteError } = await supabase
      .from('previews')
      .delete()
      .eq('id', id);
    if (deleteError) throw deleteError;

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to approve post' }),
    };
  }
};
