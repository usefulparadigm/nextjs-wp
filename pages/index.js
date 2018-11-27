// Index page
import Link from 'next/link'
import fetch from 'cross-fetch'
import Layout from '../components/Layout'
import { API_BASE } from '../constants'

const Index = ({ posts=[] }) => (
  <Layout>
    <h1>환영합니다, 워드프레스!</h1>
    <hr />
    <ul>
      {posts.map(({ id, title }) =>
        <li key={id}>
          <Link prefetch href={`/post?id=${id}`}><a>{title.rendered}</a></Link>
        </li>
      )}
    </ul>
  </Layout>
)

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(API_BASE+'wp/v2/posts')
  const data = await res.json()
  return {posts: data}
}

export default Index
