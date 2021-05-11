import  { useRouter } from 'next/router'
import Toolbar from '../../components/toolbar'


import styles from '../../styles/articles.module.css'

const Feed = ({pageNumber, articles}) => {
    const router = useRouter()
  return (
      <div className='page-container'>
      <Toolbar />
       <div className={styles.main}>
           {articles.map((article, index) => (
               <div key={index} className={styles.post}>
               <h1>{article.title}</h1>
               <p>{article.description}</p>
               {!!article.urlToImage && <img src={article.urlToImage} />}
               </div>
           ))}
       </div>
       <div className={styles.paginator}>
           <div
           onClick={() => {
               if (pageNumber > 1) {
                   router.push(`/feed/${pageNumber - 1}`)
               }
           }}
            className={pageNumber === 1 ? styles.disabled : styles.active}>
                previous Page  
           </div>
       </div>
       </div>
    );
}

export const getServerSideProps = async (pageContext) => {
    const pageNumber = pageContext.query.pageId;
    
    if(!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
            }
        }
    )
    const api = await res.json()
    const { articles } = api

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
}

export default Feed;