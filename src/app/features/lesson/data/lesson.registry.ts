import { LessonData } from '../models/lesson.data';
import { hsk1lesson1Data } from './chinese-course/hsk1/lesson.hsk1lesson1';
import { hsk1lesson2Data } from './chinese-course/hsk1/lesson.hsk1lesson2';
import { hsk1lesson3Data } from './chinese-course/hsk1/lesson.hsk1lesson3';

export const LessonRegistry: Record<string, LessonData> = {
  '1': hsk1lesson1Data,
  '2': hsk1lesson2Data,
  '3': hsk1lesson3Data
};
