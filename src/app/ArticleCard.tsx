"use client"
import Link from 'next/link'

interface ArticleCardProps {
    article: {
    id: number,
    title: string,
    topicName: string,
    authorId: number,
    body: string,
    createdAt: string,
    votes: number,
    article_img_url: string
  }
}

export default function ArticleCard(props: ArticleCardProps) {
  const { article } = props
  
  const articleLink = `/articles/${article.id}`

    return ( 
  <Link href={articleLink}>
<li  className="grid grid-cols-2 gap-4items-center bg-white border bg-opacity-85 border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="w-48 h-[150px] object-cover m-0 md:w-48 md:h-[150px] md:rounded-s-lg" src={article.article_img_url} alt="article image"/>
    <div className="flex flex-col h-full justify-around">
        <div className='flex flex-col h-full text-wrap text-xs items-center justify-center'>
      <h5 className="font-bold text-center text-gray-900 dark:text-white line-clamp-2">{article.title}</h5>
        <p className="text-gray-700 dark:text-gray-400 line-clamp-1 mt-4">{article.topicName}</p>
        <span className="text-gray-700 mt-4">&#8657;  {article.votes}</span>
      </div>
        </div>
</li>
  </Link>

)
    
}