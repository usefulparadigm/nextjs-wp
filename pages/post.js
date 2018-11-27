import { withRouter } from 'next/router'
import fetch from 'cross-fetch'
import Layout from '../components/Layout'

const Post = withRouter(({ post }) => (
  <Layout>
    <article>
      <h1>{post.title.rendered}</h1>
      <div className="body" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
    </article>
  </Layout>
))

Post.getInitialProps = async ({ query }) => {
  const res = await fetch('https://kopress.kr/wp-json/wp/v2/posts/'+query.id)
  const json = await res.json()
  return {post: json}
}

export default Post
