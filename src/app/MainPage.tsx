"use client"
import { api } from "~/trpc/react";
import ArticleCard from "./ArticleCard";
import { useAuth } from "./context/UserContext";
import { useState, useEffect } from "react";
import { Login } from "./Login";

type ArticlesState = {
    id: number,
    title: string,
    topicName: string,
    authorId: number,
    body: string,
    createdAt: string,
    votes: number,
    article_img_url: string,
}

export type UsersState = {
    id: number,
    createdAt: string,
    username: string,
    email: string,
    avatar_url: string,
}


export default function MainPage() {
  const [articles, setArticles] = useState<ArticlesState[]>([])
  const [users, setUsers] = useState<UsersState[]>([])

    const {data: fetchedArticles, isLoading} = api.article.listArticles.useQuery()
    const {data: fetchedUsers} = api.user.listUsers.useQuery()

    useEffect(() => {
        if(fetchedArticles) {
        setArticles(fetchedArticles)
        }
        if(fetchedUsers) {
        setUsers(fetchedUsers)
        }
    }, [isLoading])
    

    if(!articles) return <p>Loading...</p>

  return (
    <div>
        <Login users={users}/>
      <h1>Articles</h1>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.id} />;
      })}
    </div>
  );
}
