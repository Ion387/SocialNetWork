import { createSelector } from "@reduxjs/toolkit"




export const gettUsers=(state)=>{
  return state.usersPage.users
}

export const gettchosenPage=(state)=>{
  return state.usersPage.chosenPage
}

export const gettshowUsersCount=(state)=>{
  return state.usersPage.showUsersCount
}

export const gettisFetching=(state)=>{
  return state.usersPage.isFetching
}

export const gettisClicked=(state)=>{
  return state.usersPage.isClicked
}

export const gettdif=createSelector(gettUsers, (users)=>{

return users.filter(u=>true) 
})



/* export const gettFake=createSelector((state)=>{
 
  state.filter(u=>true)
}) */

