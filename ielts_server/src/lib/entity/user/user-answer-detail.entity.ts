import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ExamSkillDetail } from '../exam/exam-skill-detail.entity';
import { UserExamProcess } from './user-exam-process.entity';
import { IUserAnswerDetailItem } from './user-answer-detail-answer.interface';
@Entity()
export class UserAnswerDetail {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	score: number;

	@Column({ type: 'jsonb' })
	answer: IUserAnswerDetailItem[];

	@Column({ type: 'text' })
	feedback: string;

	@ManyToOne(() => ExamSkillDetail, (type) => type.id)
	examDetail: ExamSkillDetail;

	@ManyToOne(() => UserExamProcess, (type) => type.id)
	userExamProcess: UserExamProcess;
}
