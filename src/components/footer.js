import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="/"><img src="/images/github.svg" /></a>
        <a href="/"><img src="/images/linkedin.svg" /></a>
        <a href="/"><img src="/images/twitter.svg" /></a>
        <a href="/"><img src="/images/facebook.svg" /></a>
        <hr />
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <p>&cope;{new Date().getFullYear()}JOKOJOKO</p>
      </div>
    </footer>
  )
}

export default Footer