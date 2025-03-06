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
        <section className="border border-solid m-10">
            <Link href={articleLink}>
        <h3>{article.title}</h3>
            </Link>
        <p>{article.topicName}</p>
        <p>{article.body}</p>
        <p>Upvotes: {article.votes}</p>
        </section>
        
    </div>)
    
}