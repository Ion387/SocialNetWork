
export const updateObjectInArray = (items,itemId,objPropName,newObjProps)=>{
return items.map(u=>{
  if (u[objPropName]===itemId){
return{...u,...newObjProps}
}
return u;
})
}

/* users:updateObjectInArray(state.users, action.userId, 'id', {followed:true}) */