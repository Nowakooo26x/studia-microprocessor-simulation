import { createSlice } from '@reduxjs/toolkit'

import changeShortBinToBin from '../../utils/changeShortBinToBin'
import notOperation from '../../utils/notOperation'

import addUtils from '../../utils/addUtils'
import subUtils from '../../utils/subUtils'

        //parseInt("1101011", 2);
        //Number(decimal).toString(2)

const initialState = {
  AL: "00000000",
  AH: "00000000",
  BL: "00000000",
  BH: "00000000",
  CL: "00000000",
  CH: "00000000",
  DL: "00000000",
  DH: "00000000",

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
      movAction: ( state ) => {
        state[state.memoryInput.input2] = state[state.memoryInput.input1] 
        state[state.memoryInput.input1] = "00000000"
      },
      xchgAction: ( state ) => {
        let memory = state[state.memoryInput.input2]
        state[state.memoryInput.input2] = state[state.memoryInput.input1] 
        state[state.memoryInput.input1] = memory
      },
      addAction: ( state ) => {
        const m1 = state[state.memoryInput.input1], m2 = state[state.memoryInput.input2];
        state[state.memoryInput.input1] =  changeShortBinToBin(addUtils(m1, m2))
      },
      subAction: ( state ) => {
        const m1 = state[state.memoryInput.input1], m2 = state[state.memoryInput.input2];
        state[state.memoryInput.input1] =  changeShortBinToBin(subUtils(m1, m2))
      },
      orAction: ( state ) => {
        let decimal = (parseInt(state[state.memoryInput.input1], 2) | parseInt(state[state.memoryInput.input2], 2));
        state[state.memoryInput.input1] =  changeShortBinToBin(Number(decimal).toString(2))
      },
      xorAction: ( state ) => {
        let decimal = (parseInt(state[state.memoryInput.input1], 2) ^ parseInt(state[state.memoryInput.input2], 2));
        state[state.memoryInput.input1] =  changeShortBinToBin(Number(decimal).toString(2))
      },
      andAction: ( state ) => {
        let decimal = (parseInt(state[state.memoryInput.input1], 2) & parseInt(state[state.memoryInput.input2], 2));
        state[state.memoryInput.input1] =  changeShortBinToBin(Number(decimal).toString(2))
      },
      notAction: ( state ) => {
        state[state.memoryInput.input1] = notOperation(state[state.memoryInput.input1])
      },
    },
  })
  
  export const { 
    setValueMemory, setInput,
    movAction, addAction, subAction, xchgAction, orAction, xorAction, andAction, notAction
  } = memorySlice.actions
  
  export default memorySlice.reducer