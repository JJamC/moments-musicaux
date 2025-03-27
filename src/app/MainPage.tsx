"use client"
import { api } from "~/trpc/react";
import ArticleCard from "./ArticleCard";
import { useState } from "react";

export default function MainPage() {

    const [topic, setTopic] = useState("all")
    const [sortBy, setSortBy] = useState("createdAt")

    const {data: articles} = api.article.listArticles.useQuery({topic, sortBy})
    const {data: topics} = api.topic.listTopics.useQuery()

    console.log(topic);
    


    if(!articles) return <p>Loading...</p>

  return (
    <>
      <h1 className="text-2xl font-bold dark:text-white m-auto">Articles</h1>
      <div className="text-black">
      <select
      className="mr-[10]"
        name="topics"
        onChange={(e) => {
          setTopic(e.target.value.toLowerCase())
        }}
      >
        <option className="text-black" value="all">Select Articles by Topic</option>
        <option value="all">All</option>
        {topics?.map((topic) => {
          return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
        })}
      </select>
      <select
        name="sortBy"
        onChange={(e) => {
          setSortBy(e.target.value)
        }}
      >
        <option className="text-black" value="createdAt">Sort By</option>
        <option value="title">Title</option>
        <option value="createdAt">Date Published</option>
        <option value="votes">Upvotes</option>
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
