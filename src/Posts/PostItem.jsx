import React from 'react'

export default function PostItem(post1) {
  return (
    <div>{post1.id}. {post1.title}
    <div>{post1.body}</div>
    </div>
  )
}
