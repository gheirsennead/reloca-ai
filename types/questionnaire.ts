export type QuestionType =
  | 'dropdown'
  | 'select'
  | 'single-select'
  | 'multi-select'
  | 'multi-input'
  | 'scale'
  | 'ranking'
  | 'sliders'
  | 'text'
  | 'textarea';

export interface QuestionOption {
  value: string;
  label: string;
}

export interface SliderConfig {
  label: string;
  min: number;
  max: number;
}

export interface Question {
  id: number;
  section: number;
  sectionTitle: string;
  question: string;
  description?: string;
  type: QuestionType;
  mandatory: boolean;
  options?: QuestionOption[];
  sliders?: SliderConfig[];
  placeholder?: string;
  maxLength?: number;
  maxSelections?: number;
  hasOtherOption?: boolean;
  conditionalOn?: { questionId: number; value: string };
}

export interface QuestionnaireState {
  currentQuestion: number;
  answers: Record<number, string | string[] | number | Record<string, number>>;
  skipped: number[];
}

export type Answer = string | string[] | number | Record<string, number>;
