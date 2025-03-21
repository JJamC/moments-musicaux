"use client"
import { api } from "~/trpc/react";
import ArticleCard from "./ArticleCard";
import  Login  from "./login/page";

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

    const {data: articles} = api.article.listArticles.useQuery()
    const {data: users} = api.user.listUsers.useQuery()


    if(!articles || !users) return <p>Loading...</p>

  return (
    <>
        <Login users={users}/>
      <h1 className="text-2xl font-bold dark:text-white m-auto">Articles</h1>
      <ul className="m-auto w-max">
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.id} />;
      })}
      </ul>
  </>
  )
}
