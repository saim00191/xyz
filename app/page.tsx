import BlogPage from "@/components/Homepage/blogs";
import BlogPageOne from "@/components/Homepage/Blogs1";
import Down from "@/components/Homepage/down";
import Hero from "@/components/Homepage/Hero";

import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <BlogPage />
      <Down />
      <BlogPageOne/>

    </div>
  )
}

export default Home
