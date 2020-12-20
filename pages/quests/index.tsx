import React from 'react';
import Link from 'next/link';
import * as Quests from '../../lib/quests';
import Layout from '../../components/layout';

export const routeBase = 'quests';

const QuestList = () => (
  <Layout>
    <div>
      <h3>Please select a quest.</h3>
      <ul>
        {Array.from(Quests.all_quests_by_id.values()).map((quest) => (
          <li key={quest.id}>
            <Link href={`/${routeBase}/${quest.id}`}>{quest.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default QuestList;
