import React from 'react'

export default function PostList(posts) {
  const result = posts.map((post) =>
          <PostList key = {post.id} />
        )

  return (
    <div>
        {result}
    </div>
  )
}
