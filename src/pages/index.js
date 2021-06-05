import * as style from '../styles/index.module.css'
import Link from 'next/link'

const Index = () => {
  return (
    <>
      <h1 className={style.h1Text}>hello next</h1>
      <Link href="/contact">ここりんく</Link>
    </>
  )
}

export default Index