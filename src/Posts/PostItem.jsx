import React from 'react'

export default function PostItem(props) {
  return (
    <div>{props.post.id}. {props.post.title}
    <div>{props.post.body}
    <button onClick = {() => props.remove(props.post)}>Remove</button>
    </div>
    </div>
  )
}
