import s from './TodayNews.module.css';


const News = (props) => { return ( 
<div>{props.oneNews}</div> )}

const TodayNews = (props) => { 
  const allNewsElement=props.news.map(all=> <News oneNews={all.oneNews}/> )
  return (
<div className={s.index}>
{allNewsElement}
</div>
)}
  export default TodayNews;
