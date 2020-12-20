import { Brand, make } from 'ts-brand';
import { QuestTypeBrand } from './brand';

export enum SkillEnum {
  // Free to play
  Attack = 'Attack',
  Strength = 'Strength',
  Defence = 'Defence',
  Ranged = 'Ranged',
  Prayer = 'Prayer',
  Magic = 'Magic',
  Runecraft = 'Runecraft',
  Hitpoints = 'Hitpoints',
  Crafting = 'Crafting',
  Mining = 'Mining',
  Smithing = 'Smithing',
  Fishing = 'Fishing',
  Cooking = 'Cooking',
  Firemaking = 'Firemaking',
  Woodcutting = 'Woodcutting',

  // Members only
  Agility = 'Agility',
  Herblore = 'Herblore',
  Thieving = 'Thieving',
  Fletching = 'Fletching',
  Slayer = 'Slayer',
  Farming = 'Farming',
  Construction = 'Construction',
  Hunter = 'Hunter',

  // Other Skills
  Combat = 'Combat',
  Quest = 'Quest',
}
export type Skill = Brand<SkillEnum, 'id', QuestTypeBrand>;
export const Skill = make<Skill>();
