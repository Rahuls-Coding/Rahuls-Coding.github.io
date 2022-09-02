import styles from 'styles/index.module.scss'
import React from 'react'
import { AnimatePresence, AnimateSharedLayout, motion, MotionProps, useInView } from 'framer-motion'
import {
  ToolsIcon,
  FormIcon,
  FileIcon,
  ContactIcon,
  GitHubIcon,
  TwitterIcon,
  LinkedinIcon,
  ProjectInfo,
  Making,
  Contactme,
} from 'components'


type TTheme = {
  theme: Themes
  setTheme: Function
}

type Themes = 'Projects' | 'Skills' | 'Contact' | 'About'

const ThemeContext = React.createContext<TTheme>({} as TTheme)

export default function Index() {
  const [theme, setTheme] = React.useState<Themes>('Projects')

  return (
    <>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <div className={styles.info}>

              <h1>Hey! I&#39;m Rahul</h1>
              <p>High school student who&#39;s learning about the blockchain.</p>
            </div>

            <div className={styles.buttons}>
              <GitHubButton />
              <TwitterButton/>
              <LinkedinButton/>
            </div>
          </div>

          <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeSwitcher />
          </ThemeContext.Provider>
          
          <AnimatePresence exitBeforeEnter initial={false}>
            {theme === 'Projects' && (
              <Wrapper key="Projects">
                <ProjectInfo />
              </Wrapper>
            )}
            {theme === 'Skills' && (
              <Wrapper key="Skills">
                <Making/>
              </Wrapper>
            )}
            {theme === 'Contact' && (
              <Wrapper key="Contact">
                <Making/>
              </Wrapper>
            )}
            {theme === 'About' && (
              <Wrapper key="About">
                <Making/>
              </Wrapper>
            )}
          </AnimatePresence>


        </div>
      </main>
    </>
  )
}

function Wrapper(props: MotionProps & { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      style={{
        height: 475,
      }}
      {...props}
    />
  )
}

//////////////////////////////////////////////////////////////////



function GitHubButton() {
  return (
    <a
      href="https://github.com/Rahuls-Coding"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.githubButton}
    >
      <GitHubIcon />

    </a>
  )
}
function TwitterButton() {
  return (
    <a
      href="https://twitter.com/Rahuls_Coding"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.twitterButton}
    >
      <TwitterIcon />

    </a>
  )
}
function LinkedinButton() {
  return (
    <a
      href="https://www.linkedin.com/in/rahul-r-0549a4246/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkedinButton}
    >
      <LinkedinIcon />

    </a>
  )
}


const themes = [
  {
    icon: <FileIcon />,
    key: 'Projects',
  },
  {
    icon: <ToolsIcon />,
    key: 'Skills',
  },
  {
    icon: <FormIcon />,
    key: 'Contact',
  },
  {
    icon: <ContactIcon />,
    key: 'About',
  },
]

function ThemeSwitcher() {
  const { theme, setTheme } = React.useContext(ThemeContext)
  const ref = React.useRef<HTMLButtonElement | null>(null)

  return (
    <div className={styles.switcher}>
      <AnimateSharedLayout>
        {themes.map(({ key, icon }) => {
          const isActive = theme === key
          return (
            <button
              ref={ref}
              key={key}
              data-selected={isActive}
              onClick={() => {
                setTheme(key)
              }}
            >
              {icon}
              {key}
              {isActive && (
                <motion.div
                  layoutId="activeTheme"
                  transition={{
                    type: 'spring',
                    stiffness: 250,
                    damping: 27,
                    mass: 1,
                  }}
                  className={styles.activeTheme}
                />
              )}
            </button>
          )
        })}
      </AnimateSharedLayout>
      
    </div>
  )
}





