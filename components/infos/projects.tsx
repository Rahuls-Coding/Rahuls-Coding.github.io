import React from 'react'
import styles from './projects.module.scss'
import { GitHubIcon, LinkIcon } from '../icons/index'

export function ProjectInfo() {
  return (
    <div className={styles.main}>
        <div className={styles.glass}>
            <div className={styles.alignthings}>
                <div className={styles.text}>
                    To-Do App ~ Solidity
                </div>
                <div className={styles.icons}>
                    <GitHubButton href='to-do-app-solidity'/>
                    <LinkButton href='to-do-app-solidity'/>
                </div>
            </div>
            {/* <div className={styles.hidecontent}>
                Ethereum faucet used to fund ETH for ethereum accounts on the test networks. 
            </div> */}
        </div>
        <div className={styles.glass}>
            <div className={styles.alignthings}>
                <div className={styles.text}>
                    Gamerverse ~ Rust
                </div>
                <div className={styles.icons}>
                    <GitHubButton href='gamerverse-solana-backend'/>
                    <LinkButton href='gamerverse-new'/>
                </div>
            </div>
            {/* <div className={styles.hidecontent}>
                Ethereum faucet used to fund ETH for ethereum accounts on the test networks. 
            </div> */}
        </div>
        <div className={styles.glass}>
            <div className={styles.alignthings}>
                <div className={styles.text}>
                    Smart Brain ~ Javascript
                </div>
                <div className={styles.icons}>
                    <GitHubButton href='smart-brain-v1'/>
                    <InProgress />
                </div>
            </div>
            {/* <div className={styles.hidecontent}>
                Ethereum faucet used to fund ETH for ethereum accounts on the test networks. 
            </div> */}
        </div>
        <div className={styles.glass}>
            <div className={styles.alignthings}>
                <div className={styles.text}>
                    Ethereum Faucet ~ Solidity
                </div>
                <div className={styles.icons}>
                    <GitHubButton href='faucet'/>
                    <InProgress />
                </div>
            </div>
            {/* <div className={styles.hidecontent}>
                Ethereum faucet used to fund ETH for ethereum accounts on the test networks. 
            </div> */}
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

function LinkButton ({href}: {href: string}) {
    return (
        <a
        href={`https://${href}.vercel.app`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkButton}
        >
            <LinkIcon />
        </a>
    )
}

function InProgress () {
    // alert("This project is still in progress") 
    return (
        <div className={styles.linkButton}>
            <LinkIcon />
        </div>
    )
}