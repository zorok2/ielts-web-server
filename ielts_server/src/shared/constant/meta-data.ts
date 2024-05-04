import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const IS_LECTURE = 'isLecture';
export const Lecture = () => SetMetadata(IS_LECTURE, true);
