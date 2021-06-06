import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import * as style from '../styles/blog.module.scss'

const Blog = (props) => {
  return (
      <Layout>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>ブログのぺーじ</h1>
          {props.blogs.map((blog, index) => {
            return (
              <div key={index} className={style.blogCard}>
                <div className={style.textContainer}>
                  <h2>{blog.frontmatter.title}</h2>
                  <p>{blog.frontmatter.export}</p>
                  <p>{blog.frontmatter.date}</p>
                  <Link href={`/blog/${blog.slug}`}>read more</Link>
                </div>
                <div className={style.cardImg}>
                  <Image
                    src={blog.frontmatter.image}
                    height={300}
                    width={1000}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const blogs = ((context) => {
    const keys = context.keys() // マークダウンのデータ
    const values = keys.map(context) // マークダウンの中身

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const val = values[index]
      const document = matter(val.default)
      return {
        frontmatter: document.data,
        slug: slug,
      }
    })
    return data
  })(require.context('../data', true, /\.md$/)) // ファイルを読み込む

  const orderedBlogs = blogs.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id
  })
  return {
    props: {
      blogs: JSON.parse(JSON.stringify(orderedBlogs)),
    },
  }
}
