import React from 'react'
import styles from './about.module.scss'


export function About() {
  return (
    <div className={styles.main}>
        <div>
        I've been programming as early as middle school. I first fell into love programming when I started learning about data science with Python. Ever since then I've learned a lot more about the about programming and technology, such as new programming languages like Rust, Javascript, and Typescript.


        </div>
        <div className={styles.text}>
        After exploring and nearly mastering web development, I am now continuing to learn more about AI, specifcally Deep Learning and Machine Learning with Python and expertize my skills in data science.


        </div>
        <div className={styles.text}>
        Other than programming, I love travelling, biking, and badminton. If it weren't for these hobbies, I would be programming 24/7, cause it is very addictive.


        </div>
        <div className={styles.text}>
        To know a little bit more about me, you can take a look at my socials above. Or if you want to know about my skills, you can view my resume.
        </div>
       
    </div>
 
  )
}
