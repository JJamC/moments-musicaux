"use client"
import { api } from "~/trpc/react";
import { useState } from "react";
import Articles from "./Articles";

export default function MainPage() {

    const [topic, setTopic] = useState("all")
    const [sortBy, setSortBy] = useState("createdAt")

    const {data: topics} = api.topic.listTopics.useQuery()
    

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
        <Articles topic={topic} sortBy={sortBy}/>
  </>
  )
}
