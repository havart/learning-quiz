export interface IAnswer {
    _id?: string;
    quizId: string;
    date: string;
    user: string;
    result: IQuestionAnswer[];
}

export interface IQuestionAnswer {
    questionId: string;
    answers: any;
}
