import { Brand, make } from 'ts-brand';
import { QuestTypeBrand } from './brand';

export type Name = Brand<string, 'name', QuestTypeBrand>;
export const Name = make<Name>();
