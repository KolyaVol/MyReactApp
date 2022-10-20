import React, { useEffect, useState } from 'react'
import MyInput from '../UI/MyInput/MyInput';
import PostService from '../Api/PostService';
import MySelect from '../UI/MySelect/MySelect';
import PostList from './PostList';
import { usePosts } from '../hooks/usePosts';


export default function Posts() {

    let [ posts, setPosts] = useState([])
    let [selectedSort, setSelectedSort] = useState('')
    let [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

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
      <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
      />
      <PostList posts = {sortedAndSearchedPosts}/>

    </div>
  )
}
