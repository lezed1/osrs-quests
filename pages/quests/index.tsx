import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import { all_quests_by_id } from '../../lib/quests/all';

export const routeBase = 'quests';

const QuestList = () => (
  <Layout>
    <div>
      <h3>Please select a quest.</h3>
      <ul>
        {Array.from(all_quests_by_id.values()).map((quest) => (
          <li key={quest.id}>
            <Link href={`/${routeBase}/${quest.id}`}>{quest.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default QuestList;
