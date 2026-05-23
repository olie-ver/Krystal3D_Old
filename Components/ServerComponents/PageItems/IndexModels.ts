import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://xzgweputyuhchqkbitmr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6Z3dlcHV0eXVoY2hxa2JpdG1yIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODEzNzA0MywiZXhwIjoyMDYzNzEzMDQzfQ.lCAy334AMtVyp3cJvnRHqrMskMucEPWLD1AENKx_3Ww"
);

async function insertModelPack() {
  const bucket = 'model-assets';
  // const folder = 'Gem Pack 1';
  const folder = 'icons/Uncategorized';

  const { data: files, error } = await supabase
    .storage
    .from(bucket)
    .list(folder, { limit: 1000 });

  if (error) {
    console.error('Error listing files:', error);
    return;
  }

  for (const file of files || []) {
    const path = `${folder}/${file.name}`;

    const { error: insertErr } = await supabase
      .from('model_icons')
      .upsert({
        pack: folder,
        name: file.name,
        path: path
      });

    if (insertErr) {
      console.warn(`Skipped or failed: ${path}`, insertErr.message);
    } else {
      console.log(`Inserted: ${path}`);
    }
  }
}

insertModelPack();