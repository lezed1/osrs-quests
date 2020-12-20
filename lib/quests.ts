import raw_quests from './raw_quests';

interface quest {
  id: string;
  name: string;
  wiki_url: string;
  is_members_only: boolean;
  is_miniquest: boolean;
  difficulty: string;
  length: string;
  series?: string;
  requirements: {
    quests: string[];
    levels: { skill: string; level: number; boostable: boolean }[];
  };
  rewards: {
    quest_points: number;
    experience: { skill: string; amount: number }[];
  };
}

export const all_quests_by_id: Map<string, quest> = new Map();
raw_quests.forEach((quest) => all_quests_by_id.set(quest.id, quest));

export const all_quests_by_name: Map<string, quest> = new Map();
raw_quests.forEach((quest) => all_quests_by_name.set(quest.name, quest));
