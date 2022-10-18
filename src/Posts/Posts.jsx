import React, { useEffect, useState } from 'react'
import PostService from '../Api/PostService';
import PostItem from './PostItem';
import PostList from './PostList';



export default function Posts() {

    let [ posts, setPosts] = useState([])

    async function fetchPosts() {
    const postss = await PostService.getAll();
    setPosts(postss)
  }

  useEffect(() => {
    fetchPosts()
    console.log(posts);
  }, [])


  

  return (
    <div>
        {posts.map((post) =>
          <PostItem key = {post.id} post1 = {post} />
        )}
    </div>
  )
}
