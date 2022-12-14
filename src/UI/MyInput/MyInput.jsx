import React from 'react'
import styles from './MyInput.module.css'

export default function MyInput({value, ...props}) {
  return (
    <input className={styles.MyInput} {...props}></input>
  )
}
