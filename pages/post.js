import { withRouter } from 'next/router'
import fetch from 'cross-fetch'
import Layout from '../components/Layout'
import { API_BASE } from '../constants'

const Post = withRouter(({ post }) => (
  <Layout>
    <article>
      <h1>{post.title.rendered}</h1>
      <div className="body" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
    </article>
  </Layout>
))

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(API_BASE+'wp/v2/posts/'+query.id)
  const data = await res.json()
  return {post: data}
}

export default Post
