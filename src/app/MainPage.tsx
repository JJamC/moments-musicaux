"use client"
import { api } from "~/trpc/react";
import ArticleCard from "./ArticleCard";
import { useState } from "react";

export default function MainPage() {

    const [topic, setTopic] = useState("all")

    const {data: articles} = api.article.listArticles.useQuery({topic})
    const {data: topics} = api.topic.listTopics.useQuery()


    if(!articles) return <p>Loading...</p>

  return (
    <>
      <h1 className="text-2xl font-bold dark:text-white m-auto">Articles</h1>
      <div className="text-black">
      <select
        name="topics"
        id="topics"
        onChange={(e) => {
          setTopic(e.target.value)
        }}
      >
        <option className="text-black">Select Articles by Topic</option>
        <option value="all">All</option>
        {topics?.map((topic) => {
          return <option value={topic.slug}>{topic.slug}</option>
        })}
      </select>
        </div>
      <ul className="m-auto w-max">
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.id} />;
      })}
      </ul>
  </>
  )
}
