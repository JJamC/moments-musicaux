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

    return ( <div>
        <section className="items-center justify-center m-1">
            <Link href={articleLink} className="flex flex-col items-center bg-white border bg-opacity-85 border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-50 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={article.article_img_url} alt="article image"/>
        <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{article.topicName}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{article.body}</p>
    </div>
        <p className='text-gray-700'>Upvotes: {article.votes}</p>
            </Link>
        </section>
        
    </div>)
    
}