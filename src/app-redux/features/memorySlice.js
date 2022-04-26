import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  AL: "",
  AH: "",
  BL: "",
  BH: "",
  CL: "",
  CH: "",
  DL: "",
  DH: "",

  memoryInput: {
    input: "",
    value: "",

    input1: "",
    input2: "",
  }
}

export const memorySlice = createSlice({
    name: 'memory',
    initialState,
    reducers: {
      setValueMemory: (state, action) => {
        state[action.payload.title] = action.payload.value
      },
      setInput: (state, action) => {
        state.memoryInput[action.payload.name] = action.payload.value
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setValueMemory, setInput } = memorySlice.actions
  
  export default memorySlice.reducer