import React from 'react'

export default function PostItem(props) {
  return (
    <div>{props.post.id}. {props.post.title}
    <div>{props.post.body}</div>
    </div>
  )
}
