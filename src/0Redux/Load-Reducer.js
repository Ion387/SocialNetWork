import { contentApi, usersApi } from "../API/AxiosApi";

const initialState = {
isLoading:false
}

 export const Loading = () => { return{
  type: 'LOADING'
}} ;
/* export const endOfLoading = () => { return{
  type: 'END-OF-LOADING'
}} ;

export const letLoading = (isLoading) => { return{
  type: 'IS-LOADING', isLoading
}} ;
 */
const loadReducer= (state=initialState, action)=> {

switch (action.type) {
 
  case 'LOADING': 
return {
    ...state,
    isLoading:true
  };

  case 'END-OF-LOADING': 
  return {
      ...state,
      isLoading:false
    };

    case 'IS-LOADING': 
    return {
        ...state,
        isLoading:action.isLoading
      };


default:return state
}}



/* export const getAuthThunkCreator=()=>(dispatch)=>{
    contentApi.letAuthContent().then(response=>{
    if (response.data.resultCode===0){dispatch(setUserData(response.data.data));
    }});
}
 */

export default loadReducer