import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/UnderConstruction.module.scss'

const UnderConstruction: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Under Construction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey, You there!!!
        </h1>
        <p className={styles.description}>
          You came to early, this site is still under construction
        </p>

        <p className={styles.description}>
          It will be up on {' '}
          <code className={styles.code}>/undefined/</code>
          {' '} days

          <p className={styles.sign}>
            It&apos;s not a bug,<br></br>it&apos;s a feature
          </p>

        </p>
          <span className={styles.options}>
            In the meantime, here&apos;s another options to meet us
          </span>

        <div className={styles.grid}>
          <a
            href="https://www.linkedin.com/in/nicolas-de-marco-43b507174/"
            target="blank"
            className={styles.card}>
            <h2>Linkedin </h2>
            <p>Take a look to my background, my skills and check my resume.</p>
          </a>

          <a
            href="https://github.com/nicahdemarco"
            target="blank"
            className={styles.card}>
            <h2>Github </h2>
            <p>Check my profile, my languages knowledge and works.
              See my growth.</p>
          </a>

          <a
            target="blank"
            href="https://www.instagram.com/nicahdemarco/"
            className={styles.card}
          >
            <h2>Instagram</h2>
            <p> If you&apos;ll spy me, leave me some likes.
            </p>

          </a>

          <a
            target="blank"
            href="mailto:nicahdemarco@gmail.com"
            className={styles.card}
          >
            <h2>Email</h2>
            <p>Send me an email and tell me what&apos;s going on.</p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default UnderConstruction
