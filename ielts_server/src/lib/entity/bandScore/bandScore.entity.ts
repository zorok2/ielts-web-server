import { UserAnswerDetail } from '../user/user-answer-detail.entity';
import { IBandScoreItem } from './i-bandScore-item';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
	name: 'band_score',
})
export class BandScoreEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'text', default: '' })
	name: string;

	@Column({ type: 'json' })
	bands: IBandScoreItem[];

	check(data: UserAnswerDetail[]): number {
		const sortBands: IBandScoreItem[] = JSON.parse(JSON.stringify(this.bands));
		sortBands.sort((a, b) => b.max - a.max);
		const totalCorrect: number = data.reduce((acc, item) => {
			if (!Number.isFinite(item.score)) return acc;
			acc += item.score;
			return acc;
		}, 0);
		for (const band of sortBands) {
			if (totalCorrect >= band.min && totalCorrect <= band.max)
				return band.score;
		}
		return 0;
	}

	isReading() {
		return this.name.toLowerCase() === 'reading';
	}

	isListening() {
		return this.name.toLowerCase() === 'listening';
	}

	round(score: number) {
		const str = score.toString();
		let prefix = Number.parseInt(str[2]) * 10 + Number.parseInt(str[3] || '0');
		if (prefix < 25) return Number.parseFloat(str[0]);
		if (prefix < 75 && prefix >= 25) return Number.parseFloat(str[0] + '.5');
		return Number.parseInt(str[0]) + 1;
	}
}
