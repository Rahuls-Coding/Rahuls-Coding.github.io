import React from 'react'
import styles from './skills.module.scss'
import { RustIcon, SolidIcon  } from '../icons/index'


export function SkillsInfo() {
  return (
    <div className={styles.main}>
        Here are my most used and favorite programming langauges. 
        <div className={styles.langs}>
            <div className={styles.lang}>
            •  Javascript &nbsp; <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' className={styles.icon} alt='javascript'/>
            </div>
            <div className={styles.lang}>
            • Typescript &nbsp; <img src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' className={styles.icon} alt='javascript'/>
            </div>
            <div className={styles.lang}>
            • Rust &nbsp; <RustIcon/>
            </div>
            <div className={styles.lang}>
            •  Python &nbsp; <img src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' className={styles.icon} alt='javascript'/>
            </div>
            <div className={styles.lang}>
            •  Solidity  <SolidIcon />
            </div>
        </div>
        <div>
        Note, if you want to about everything I know, download my CV below. 
        </div>
    </div>

  )
}


