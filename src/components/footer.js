import Link from 'next/link'
import * as style from '../styles/common.module.scss'

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.insideContainer}>
        <a href="/"><img src="/images/github.svg" /></a>
        <a href="/"><img src="/images/linkedin.svg" /></a>
        <a href="/"><img src="/images/twitter.svg" /></a>
        <a href="/"><img src="/images/facebook.svg" /></a>
        <hr />
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <p>&copy;{new Date().getFullYear()}JOKOJOKO</p>
      </div>
    </footer>
  )
}

export default Footer