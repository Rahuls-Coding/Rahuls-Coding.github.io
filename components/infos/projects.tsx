import React from 'react'
import styles from './projects.module.scss'
import { GitHubIcon, LinkIcon } from '../icons/index'

export function ProjectInfo() {
  return (
    <div className={styles.main}>
These are a sample of the projects that I loved working on and learned somthing new during their development.
        <div className={styles.glass}>
            <div className={styles.alignthings}>
                <div className={styles.text}>
                    GeneAI
                </div>
                
            </div>
            
        </div>
        <div className={styles.glass}>
            <div className={styles.alignthings}>
                <div className={styles.text}>
                    ShapeMind
                </div>
                <div className={styles.icons}>
                    <GitHubButton href='shapeMind'/>
                </div>
            </div>

        </div>
        <div className={styles.glass}>
            <div className={styles.alignthings}>
                <div className={styles.text}>
                    Volog
                </div>
                <div className={styles.icons}>
                    <GitHubButton href='smart-brain-v1'/>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}


function GitHubButton({ href }: { href: string }) {
    return (
      <a
        href={`https://github.com/Rahuls-Coding/${href}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubButton}
      >
        <GitHubIcon />
  
      </a>
    )
  }

