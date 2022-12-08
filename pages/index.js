import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
    return (
      <div>
        <Head>
          <title>Vikas | Back-End Developer</title>
          <meta name="description" content="I’m a back-end web developer specializing in building backend API's." />
          <link rel="icon" href="/fav.png" />
        </Head>
        <Main/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    )
  }