import React from 'react'
import styles from './about.module.scss'


export function About() {
  return (
    <div className={styles.main}>
        <div>
            Hello! 👋 My name is Rahul Rajkumar. I'm currently an high school junior at North Staracademy. 
            I fell in love with coding ever since middle school, that's when I first started learning about programming, specificlly about the pandas library 📔 in Python. 
            Now I'm currently learning about Blockchain technologies such as Ethereum smart contracts, Solana programs, and etc. 
        </div>
        <div className={styles.text}>
            My other hobbies include biking 🚴 and travelling. I've been to 7 different countries 🌏 and 9 different schools 🏫! Right now I'm secretly 🤫 building a Solana app in the DeFi space that'll be public when in Beta. 
        </div>
    </div>
 
  )
}
