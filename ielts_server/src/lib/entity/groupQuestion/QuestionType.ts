export type Answer = {
  id: string;
  content: string;
  isCorrect?: boolean; // Note: Corrected to use '?' for optional property
};

export type MultipleChoice = {
  id?: string; // Note: Corrected to use '?' for optional property
  question?: string; // Note: Corrected to use '?' for optional property
  answers: Answer[];
};

export type MultipleResponse = {
  id?: string; // Note: Corrected to use '?' for optional property
  question?: string; // Note: Corrected to use '?' for optional property
  answers: Answer[];
};

export type Dropdown = {
  id?: string; // Note: Corrected to use '?' for optional property
  question?: string; // Note: Corrected to use '?' for optional property
  answers: Answer[];
};

export type Matching = {
  id?: string; // Note: Corrected to use '?' for optional property
  question?: string; // Note: Corrected to use '?' for optional property
  answer: Answer;
};

export type MatchingHeading = {
  id?: string; // Note: Corrected to use '?' for optional property
  question?: string; // Note: Corrected to use '?' for optional property
  correctAnswers: Answer[];
  totalAnswers: Answer[];
};

export type FillTheBlank = {
  id?: string; // Note: Corrected to use '?' for optional property
  question?: string; // Note: Corrected to use '?' for optional property
  answers: Answer[];
};

export type MatchingFillBlank = {
  id?: string; // Note: Corrected to use '?' for optional property
  question?: string; // Note: Corrected to use '?' for optional property
  correctAnswers: Answer[];
  totalAnswers: Answer[];
};
