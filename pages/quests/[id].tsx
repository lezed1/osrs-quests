import React from 'react';
import Link from 'next/link';
import _ from 'lodash';
import Layout from '../../components/layout';
import * as Quests from '../../lib/quests';
import * as QuestPage from '.';

export const getStaticPaths = async () => {
  const paths = Array.from(Quests.all_quests_by_id.values(), (quest) => {
    return {
      params: {
        id: quest.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const quest = Quests.all_quests_by_id.get(params.id);
  return {
    props: {
      quest,
    },
  };
};

export default function Post({ quest }) {
  return (
    <Layout>
      <div>
        <h1>{quest.name}</h1>
        <p>{quest.is_members_only ? '(Members only)' : '(Free to play)'}</p>
        {quest.is_miniquest ? <p>(Miniquest)</p> : ''}

        <a href={quest.wiki_url}>View on OSRS Wiki</a>

        <h2>Difficulty</h2>
        {quest.difficulty}

        <h2>Length</h2>
        {quest.length}

        <h2>Requirements</h2>
        <h3>Quests</h3>
        <ul>
          {quest.requirements.quests.map((required_quest_name) => {
            const required_quest = Quests.all_quests_by_name.get(
              required_quest_name
            );

            if (_.isUndefined(required_quest)) {
              return (
                <div
                  key={required_quest_name}
                >{`Invalid quest ID "${required_quest}"`}</div>
              );
            }

            return (
              <li key={required_quest.id}>
                <Link href={`/${QuestPage.routeBase}/${required_quest.id}`}>
                  {required_quest.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <h3>Levels</h3>
        <ul>
          {quest.requirements.levels.map(({ skill, level, boostable }) => {
            return (
              <li key={skill}>
                {`${skill} level ${level}${boostable ? ' (Boostable)' : ''}`}
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
