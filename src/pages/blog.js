import matter from 'gray-matter'
import Link from 'next/link'

const Blog = (props) => {
  return (
    <>
      <h1>ブログのぺーじ</h1>
      {props.blogs.map((blog, index) => 
        <div key={index}>
          <h2>{blog.frontmatter.title}</h2>
          <p>{blog.frontmatter.data}</p>
          <Link href={`/blog/${blog.slug}`}>read more</Link>
        </div>
      )}
    </>
  )
}

export default Blog

export async function getStaticProps(){
  const blogs = ((context) => {
    const keys = context.keys() // マークダウンのデータ
    const values = keys.map(context) // マークダウンの中身
    
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const val = values[index]
      const document = matter(val.default)
      return {
        frontmatter: document.data,
        slug: slug
      }
    })
    return data
  })(require.context('../data', true, /\.md$/)) // ファイルを読み込む

  const orderedBlogs = blogs.sort((a, b) => {
    return a.frontmatter.id - b.frontmatter.id
  })
  return {
    props: {
      blogs: JSON.parse(JSON.stringify(orderedBlogs))
    },
  }
}