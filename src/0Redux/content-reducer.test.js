import React from "react";
import { getStatus } from "./content-reducer";

test('Test of new Status', () => {

// 1. test data
let action = getStatus('New Status')

const initialState = {
  userProfile:2, 
  postData: [
    {id:1 ,message:'ЭЙ!!!', likes:20 },
    {id:2 ,message:'privet', likes:41 },
    {id:3 ,message:'kag dila?', likes:56 },
    {id:4 ,message:'Mnnee horoho!!', likes:34 },
    {id:5 ,message:'kleeva!', likes:10 },
    {id:5 ,message:'kleeva!', likes:10 },],
   newPostText:'2',
   status:'',
   fake:0
}

// 2. action

let newState = contentReducer({initialState},action)

// 3. expectation

expect(newState.status).toBe('New Status');



});
