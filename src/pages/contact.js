import Layout from '../components/layout'
import * as style from '../styles/contact.module.scss'

const Contact = () => {
  return (
    <Layout>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>こんたくと</h1>
          <p>おといあわせはこちら的な</p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact