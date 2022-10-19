import React, { useEffect, useState } from 'react'
import PostService from '../Api/PostService';
import MySelect from '../UI/MySelect/MySelect';
import PostItem from './PostItem';
import PostList from './PostList';



export default function Posts() {

    let [ posts, setPosts] = useState([])
    let [selectedSort, setSelectedSort] = useState('')

    async function fetchPosts() {
    const postss = await PostService.getAll();
    setPosts(postss)
  }

  useEffect(() => {
    fetchPosts()
   
  }, [])

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }
  

  return (
    <div>
      <MySelect
        value = {selectedSort}
        onChange = {sortPosts}
        defaultValue = 'Sort'
        options = {[
          {value: 'title', name: 'by title'},
          {value: 'body', name: 'by body'},
        ]}
      />
      <PostList posts = {posts}/>

    </div>
  )
}
