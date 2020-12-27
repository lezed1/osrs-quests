import { Id } from './id';
import { Name } from './name';
import { Skill } from '../skills/skill';

export default interface quest {
  id: Id;
  name: Name;
  wiki_url: string;
  is_members_only: boolean;
  is_miniquest: boolean;
  difficulty: string;
  length: string;
  series: string | null;
  requirements: {
    quests: string[];
    levels: { skill: Skill; level: number; boostable: boolean }[];
  };
  rewards: {
    quest_points: number;
    experience: { skill: Skill; amount: number }[];
    items?: string[];
    other?: string[];
  };
}
