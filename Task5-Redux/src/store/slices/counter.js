import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    initialState:0,
    name:"counter",
    reducers:{
        increment: (state) => {
            return state + 1;
        },
        decrement: (state) => {
            return state - 1 ;
        },
        incrementByVal: (state,actions) => {
            return state + actions.payload;
        }
    }
});

export const {increment, decrement, incrementByVal} = counterSlice.actions;
export default counterSlice.reducer;


// OR------

// const counterSlice = createSlice({
//     initialState:{
//         value:0,
//     },
//     name:"counter",
//     reducers:{
//         increment: (state) => {
//             return {...state,value:state.value + 1};
//         },
//         decrement: (state) => {
//             return {...state,value:state.value - 1 };
//         },
//         incrementByVal: (state,actions) => {
//             return {...state, value:state.value + actions.payload};
//         }
//     }
// });