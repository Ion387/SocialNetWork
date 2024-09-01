import s from './News.module.css';
import TodayNews from './TodayNews/TodayNews';

const News = (props) => { return ( 
<div className={s.index}> 
  Новости
<TodayNews news={props.news} />
</div> )}



  export default News;


 