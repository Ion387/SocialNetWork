import { connect } from "react-redux";
import s from "../Components/Users/Users.module.css"
import { onClickLeftArrowOfPaginator, onClickRightArrowOfPaginator } from "../0Redux/paginator-reducer";

 const Paginator =(props)=>{
  let index=0;
  let pages=[];
  let currentPage=0;
  if (props.count <= 10) {currentPage=props.count} 
  else {currentPage=10}
  for (let i=props.leftPageNumber; i<=props.leftPageNumber+9; i+=1){ 
  pages.push(i)
  } 


return (
  <div>
    <button onClick={()=> props.onClickLeftArrowOfPaginator()}> {"<"} </button>
  {pages.map(p=> {
    return <button key = {p} className={
  props.chosenPage===p ? s.selectedPage : ""} 
  onClick={()=>{props.onClick(p)}}> {p} </button>})}
  <button onClick={()=> props.onClickRightArrowOfPaginator(props.count)}  >{">"}</button>
  </div>
   )

}

let mapStateToProps =(state)=>{
  return{
  leftPageNumber:state.paginator.leftPageNumber
}}


export default connect(mapStateToProps, {onClickLeftArrowOfPaginator, onClickRightArrowOfPaginator})(Paginator)

