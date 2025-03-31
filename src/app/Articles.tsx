import ArticleCard from "./ArticleCard";
import { api } from "~/trpc/react";



interface ArticleProps {
    topic: string,
    sortBy: string
  }

export default function Articles({topic, sortBy}: ArticleProps) {

    const {data: articles} = api.article.listArticles.useQuery({topic, sortBy})

    if(!articles) return <p>Loading...</p>

return (
    <ul className="grid grid-cols-3 gap-4 auto-rows-auto">
    {articles.map((article) => {
      return <ArticleCard article={article} key={article.id} />;
    })}
    </ul>
)
}