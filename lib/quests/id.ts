import { Brand, make } from 'ts-brand';
import { QuestTypeBrand } from './brand';

export type Id = Brand<string, 'id', QuestTypeBrand>;
export const Id = make<Id>();
