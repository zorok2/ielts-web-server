import { Injectable } from '@nestjs/common';
import { SkillExam } from 'src/lib/entity/exam/skill-exam.entity';
import { SkillExamRepository } from '../repository/skill-exam.repository';
import { CreateSkillExamDto } from '../dto/create-skill-exam.dto';
import { ExamService } from './exam.service';
import { PartialGraphHost } from '@nestjs/core';
import { UpdateSkillExamDto } from '../dto/update-skill-exam.dto';
import { ResExamSkill } from '../dto/res-exam-skill.dto';

@Injectable()
export class SkillExamService {
	constructor(
		private skillExamRepository: SkillExamRepository,
		private examService: ExamService,
	) {}

	async findAll(): Promise<SkillExam[]> {
		return this.skillExamRepository.findAll();
	}

	async findOne(id: string): Promise<SkillExam> {
		return this.skillExamRepository.findOne(id);
	}

	async findOneToSend(id: string): Promise<ResExamSkill> {
		const skillExam = await this.skillExamRepository.findOneToSend(id);
		// return new ResExamSkill(skillExam);
		return new ResExamSkill(skillExam);
	}

	async create(skillExam: CreateSkillExamDto): Promise<SkillExam> {
		const createInfo = new SkillExam();
		createInfo.name = skillExam.name;
		createInfo.exam = await this.examService.findOne(skillExam.examId);
		return this.skillExamRepository.create(createInfo);
	}

	async update(
		id: string,
		updateSkillExam: UpdateSkillExamDto,
	): Promise<SkillExam> {
		const updateInfo = await this.skillExamRepository.findOne(id);
		updateInfo.name = updateSkillExam.name;
		updateInfo.exam = await this.examService.findOne(updateSkillExam.examId);
		return this.skillExamRepository.update(id, updateInfo);
	}

	async remove(id: string): Promise<void> {
		return this.skillExamRepository.remove(id);
	}
}
