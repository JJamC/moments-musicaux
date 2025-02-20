import { api } from "~/trpc/server";
import ArticleCard from "./ArticleCard";


export default async function MainPage() {
    
    const articles = await api.article.listArticles()


    return (
        <div>
            <h1>Articles</h1>
            {articles.map((article) => {
          return <ArticleCard article={article} key={article.id} />;
        })}
        </div>

    )
}