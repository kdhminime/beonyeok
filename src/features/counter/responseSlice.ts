import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface responseState {
  input: string;
  additionalInfo: string;
  loading: boolean;
  loadingState : number;
  chatHistory: any[];
}

// Define the initial state using that type
const initialState: responseState = {
  input: '',
  additionalInfo: '',
  loading: false,
  loadingState : 1,
  chatHistory: [{ role: "system", content: "You will help me translate Korean novels into English. I will give you sentences in Korean, and you will translate it into English." }]
};

export const responseSlice = createSlice({
  name: 'response',
  initialState,
  reducers: {
    reset: (state) => {
      state.input = '';
      state.additionalInfo = '';
    },
    setNewInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    setNewAdditionalInfo: (state, action: PayloadAction<string>) => {
      state.additionalInfo = action.payload;
    },
    setLoading: (state) =>{
      state.loading = !state.loading;
    },
    setLoadingState (state, action: PayloadAction<number>){
      state.loadingState = action.payload;
    },
    pushNewResponse: (state, action: PayloadAction<any>) => {
      state.chatHistory = [...state.chatHistory, action.payload];
    }
  },
});

export const { reset, setNewInput, setNewAdditionalInfo, setLoading, setLoadingState, pushNewResponse } = responseSlice.actions;

export default responseSlice.reducer;
