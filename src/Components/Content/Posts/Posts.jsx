import React from 'react';
import s from './Posts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../0Redux/content-reducer';
import PostItem from './PostItem/PostItem';
import { useForm } from 'react-hook-form';

// Пример как можно сделтаь заполнение формы через Ref
let newPostElement = React.createRef();



const Posts = React.memo(props => {

  console.log('Пишут посты');
/*   {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register("name", { required: true, maxLength: 30 })}
        />
  
        {errors.name && errors.name.type === "required" && (
          <span role="alert">This is required34534534</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span role="alert">Max length exceeded</span>
        )}
        <input type="submit" />
      </form>
    )
  }

} */

  const {register,handleSubmit, reset, watch, formState: { errors }} =useForm({ mode: "onBlur" }) 

/*   let onAddPost = () => {
  props.addPost ();
} */
/* let onPostChange = () => {
  let text=newPostElement.current.value; 
  props.changePostText(text)} */

 let dialogsElements=props.postData.map (p => <PostItem message={p.message} likesCount={p.likes}/>)

const onSubmit = (data) =>{
props.addPost(data.newPost)
reset();
}

 return ( 



  <div className={s.NewPosts}> 
  My posts 
  <form onSubmit={handleSubmit(onSubmit)}>
  <input id='newPost' style={errors.newPost && { border: "solid red 5px" }} type={'textarea'} {...register("newPost",{required: true, maxLength: 6}) } value={watch('newPost')} />
 
  <input type={'submit'} value={'new post'} />
  {errors.newPost && errors.newPost.type === "required" && (
          <div style={{color:'white'}}>Не введено сообщение</div>
        )}
          {errors.newPost && errors.newPost.type === "maxLength" && (
          <div style={{color:'white'}}>Очень мноогооо</div>
        )}

{/* onChange={onPostChange} ref={newPostElement} value={props.newPostText}  */}

   </form> 
{/*    Отрисовка постов */ }
  {dialogsElements} 

   </div> 

  )} )



export default Posts;