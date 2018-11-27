// Index page
import Link from 'next/link'
import fetch from 'cross-fetch'
import Layout from '../components/Layout'

const Index = ({ posts=[] }) => (
  <Layout>
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
  const res = await fetch('https://kopress.kr/wp-json/wp/v2/posts')
  const data = await res.json()
  return {posts: data}
}

export default Index
