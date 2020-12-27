import { Brand, make } from 'ts-brand';
import { QuestTypeBrand } from './brand';

export enum SkillEnum {
  // Free to play
  Attack = 'Attack',
  Cooking = 'Cooking',
  Crafting = 'Crafting',
  Defence = 'Defence',
  Firemaking = 'Firemaking',
  Fishing = 'Fishing',
  Hitpoints = 'Hitpoints',
  Magic = 'Magic',
  Mining = 'Mining',
  Prayer = 'Prayer',
  Ranged = 'Ranged',
  Runecraft = 'Runecraft',
  Smithing = 'Smithing',
  Strength = 'Strength',
  Woodcutting = 'Woodcutting',

  // Members only
  Agility = 'Agility',
  Construction = 'Construction',
  Farming = 'Farming',
  Fletching = 'Fletching',
  Herblore = 'Herblore',
  Hunter = 'Hunter',
  Slayer = 'Slayer',
  Thieving = 'Thieving',

  // Other Skills
  Combat = 'Combat',
  Quest_points = 'Quest points',
}
export type Skill = Brand<SkillEnum, 'id', QuestTypeBrand>;
export const Skill = make<Skill>();

export const iconPath = (skill: Skill) => `/skill-icons/${skill}_icon.png`;
export const render = (skill: Skill) => (
  <span>
    <style jsx>{`
      .skill-icon {
        width: 1em;
        height: 1em;
      }
    `}</style>
    <svg className="skill-icon" viewBox="0 0 25 25">
      <image href={iconPath(skill)} width="25" height="25"></image>
    </svg>
    {` ${skill}`}
  </span>
);
