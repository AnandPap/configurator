import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type updateSelectedAnswersPayloadType = {
  id: number;
  text: string;
};
type setSlideNumberPayloadType = {
  previous?: number;
  current?: number;
};

type setFormDataPayloadType = {
  address?: string;
  telefon?: string;
  email?: string;
};

type initialStateType = {
  selectedAnswers: string[];
  slideNumber: {
    previous: number;
    current: number;
  };
  formData: formDataType;
};
export type formDataType = {
  address: string;
  telefon: string;
  email: string;
};

export const initialState: initialStateType = {
  selectedAnswers: Array(4).fill(""),
  slideNumber: { previous: 0, current: 0 },
  formData: {
    address: "",
    telefon: "",
    email: "",
  },
};

export const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    resetSelectedAnswers: (state, action: PayloadAction<string[]>) => {
      state.selectedAnswers = action.payload;
    },
    updateSelectedAnswers: (
      state,
      action: PayloadAction<updateSelectedAnswersPayloadType>
    ) => {
      state.selectedAnswers = [
        ...state.selectedAnswers.slice(0, action.payload.id - 1),
        action.payload.text,
        ...state.selectedAnswers.slice(action.payload.id),
      ];
    },
    setSlideNumber: (
      state,
      action: PayloadAction<setSlideNumberPayloadType>
    ) => {
      state.slideNumber = { ...state.slideNumber, ...action.payload };
    },
    setFormData: (state, action: PayloadAction<setFormDataPayloadType>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
  },
});

export const {
  resetSelectedAnswers,
  updateSelectedAnswers,
  setSlideNumber,
  setFormData,
} = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
