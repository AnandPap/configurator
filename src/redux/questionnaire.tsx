import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type setSelectedAnswersPayloadType = {
  type: string;
  id: number;
  text: string;
};

type setSlideNumberPayloadType = {
  previous?: number;
  current?: number;
};

type initialStateType = {
  selectedAnswers: string[];
  slideNumber: slideNumberType;
};

type slideNumberType = {
  previous: number;
  current: number;
};

export const initialState: initialStateType = {
  selectedAnswers: Array(5).fill(""),
  slideNumber: { previous: 0, current: 0 },
};

export const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    setSelectedAnswers: (
      state,
      action: PayloadAction<setSelectedAnswersPayloadType>
    ) => {
      if (action.payload.type === "update")
        state.selectedAnswers = [
          ...state.selectedAnswers.slice(0, action.payload.id - 1),
          action.payload.text,
          ...state.selectedAnswers.slice(action.payload.id - 1),
        ];
      else if (action.payload.type === "update")
        state.selectedAnswers = Array(5).fill("");
      else state.selectedAnswers = state.selectedAnswers;
    },
    setSlideNumber: (
      state,
      action: PayloadAction<setSlideNumberPayloadType>
    ) => {
      state.slideNumber = { ...state.slideNumber, ...action.payload };
    },
  },
});

export const { setSelectedAnswers, setSlideNumber } =
  questionnaireSlice.actions;

export default questionnaireSlice.reducer;
