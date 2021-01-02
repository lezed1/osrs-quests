import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { QuestStatus, SkillStatus } from '.';

@Entity()
export class User {
  @PrimaryColumn({ update: false })
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ nullable: true })
  osrs_username?: string;

  @OneToMany(() => QuestStatus, (questStatus) => questStatus.user)
  questStatuses: QuestStatus[];

  @OneToMany(() => SkillStatus, (skillStatus) => skillStatus.user)
  skillStatuses: SkillStatus[];
}
