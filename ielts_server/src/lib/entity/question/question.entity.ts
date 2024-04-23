import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GroupQuestion } from './group-question.entity';
import { Answer } from 'src/shared/interface/answer-of-question.interface';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  content: string;

  @Column()
  src: string;

  @ManyToOne(() => GroupQuestion, (type) => type.question)
  groupQuestion: GroupQuestion;

  @Column({ type: 'jsonb'})
  answer: Answer[];
}