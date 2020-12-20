import { Brand, make } from 'ts-brand';
import { QuestTypeBrand } from './brand';
import { Id } from './id';
import { Name } from './name';
import quest from './quest';
import raw_quests from './raw_quests';

export const all_quests_by_id: Map<Id, quest> = new Map();
raw_quests.forEach((quest) => all_quests_by_id.set(quest.id, quest));

export const all_quests_by_name: Map<Name, quest> = new Map();
raw_quests.forEach((quest) => all_quests_by_name.set(quest.name, quest));
