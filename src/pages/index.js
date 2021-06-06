import Link from 'next/link'
import Image from 'next/image'

const Index = () => {
  return (
    <>
      <div>
        <Image src="/images/index-hero.jpg" layout="fill" objectFit="cover" quality={90} />
        <div>
          <h1>I'm JOKO</h1>
          <h3>js developer</h3>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>js nerd</h2>
            <p>asdkaksdaksdkaldkglads</p>
          </div>
          <Image src="/images/profile.jpg" height={1195} width={1000} quality={90} />
        </div>
        <div>
          <h2>skills</h2>
          <div>
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
    </>
  )
}

export default Index