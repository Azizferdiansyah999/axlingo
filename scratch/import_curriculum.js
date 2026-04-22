
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Manual env parsing
const envPath = 'c:/axlingo/.env.local';
const envRaw = fs.readFileSync(envPath, 'utf8');
const envConfig = {};
envRaw.split('\n').forEach(line => {
  const [key, ...value] = line.split('=');
  if (key && value.length > 0) {
    envConfig[key.trim()] = value.join('=').trim().replace(/"/g, '');
  }
});

const supabase = createClient(
  envConfig.NEXT_PUBLIC_SUPABASE_URL,
  envConfig.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function migrate() {
  const dataPath = 'c:/axlingo/Vibe/path/1-5.txt';
  const rawData = fs.readFileSync(dataPath, 'utf8');
  const unitsData = JSON.parse(rawData);

  const courseId = 'c1000000-0000-0000-0000-000000000001';

  console.log('--- START RE-MIGRATION (1-5.txt) ---');

  // 1. Insert Default Section
  const { data: section, error: sErr } = await supabase
    .from('sections')
    .insert({
      course_id: courseId,
      title: 'SECTION 1: FOUNDATION & DAILY BASICS',
      order_index: 1,
      is_locked: false
    })
    .select()
    .single();

  if (sErr) {
    console.error('Error inserting section:', sErr);
    return;
  }

  for (const unitData of unitsData) {
    console.log(`Processing Unit: ${unitData.title}`);
    
    // 2. Insert Unit
    const { data: unit, error: uErr } = await supabase
      .from('units')
      .insert({
        section_id: section.id,
        title: unitData.title,
        order_index: unitData.order,
        is_locked: unitData.order === 1 ? false : true
      })
      .select()
      .single();

    if (uErr) {
      console.error('Error inserting unit:', uErr);
      continue;
    }

    // 3. Insert Subtopics
    let subtopicIndex = 1;
    for (const topicObj of unitData.topics) {
      const { data: subtopic, error: stErr } = await supabase
        .from('subtopics')
        .insert({
          unit_id: unit.id,
          title: topicObj.topic,
          description: topicObj.description,
          order_index: subtopicIndex++
        })
        .select()
        .single();

      if (stErr) {
        console.error('Error inserting subtopic:', stErr);
        continue;
      }

      // 4. Insert 7 Nodes (Lessons) per Subtopic
      const nodes = [];
      for (let i = 1; i <= 7; i++) {
        nodes.push({
          subtopic_id: subtopic.id,
          title: `${topicObj.topic} - Lesson ${i}`,
          order_index: i,
          type: i === 7 ? 'boss' : 'vocab_intro',
          xp_reward: i === 7 ? 50 : 20
        });
      }

      const { error: nErr } = await supabase.from('lessons').insert(nodes);
      if (nErr) console.error('Error inserting nodes:', nErr);
    }
  }

  console.log('--- RE-MIGRATION FINISHED ---');
}

migrate().catch(console.error);
