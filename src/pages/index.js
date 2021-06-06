import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import * as style from '../styles/index.module.scss'

const Index = () => {
  return (
    <Layout>
      <div className={style.hero}>
        <Image src="/images/index-hero.jpg" layout="fill" objectFit="cover" quality={90} />
        <div className={style.textContainer}>
          <h1>I'm JOKO</h1>
          <h3>js developer</h3>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.profile}>
          <div>
            <h2>js nerd</h2>
            <p>asdkaksdaksdkaldkglads</p>
          </div>
          <Image src="/images/profile.jpg" height={1195} width={1000} quality={90} />
        </div>
        <div className={style.skills}>
          <h2>skills</h2>
          <div className={style.skillsContainer}>
            <div><img src="/images/javascript.svg" /><span>JavaScript</span></div>
            <div><img src="/images/react.svg" /><span>react</span></div>
            <div><img src="/images/gatsby.svg" /><span>Gatsby</span></div>
            <div><img src="/images/next.svg" /><span>Next.js</span></div>
          </div>
        </div>
        <div>
          <Link href="/contact">Make It Happen!</Link>
        </div>
      </div>
      </Layout>
  )
}

export default Index