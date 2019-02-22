export class Question {
  question: string;
  category: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
}

export interface IQuestion {
  _id?: string;
  question: string;
  category?: number;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
}

export const QUESTION_CATEGORIES = [
  {key: 1, title: 'JavaScript'},
  {key: 2, title: 'HTML'},
  {key: 3, title: 'CSS'},
  {key: 4, title: 'PHP'},
  // {key: 5, title: 'OTHER'},
];
