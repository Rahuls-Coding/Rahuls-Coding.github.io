import React from 'react'
import styles from './contact.module.scss'
import { TwitterIcon, LinkIcon, GitHubIcon } from '../icons/index'

export  function Contactme() {
  return (
    <div>
        <div className={styles.socials}>
            <GitHubButton />
            <div></div>
            <div></div>
        </div>
    </div>
  )
}


function GitHubButton() {
    return (
      <a
        href='https://github.com/Rahuls-Coding'
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubButton}
      >
        <GitHubIcon/>
  
      </a>
    )
  }