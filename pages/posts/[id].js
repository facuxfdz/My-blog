import Layout from '../../components/layout.js'
import {getAllPostIds, getPostData} from '../../lib/posts.js'
import Head from 'next/head'
import Date from '../../components/date.js'
import utilStyles from '../../styles/utils.module.css'

export const getStaticProps = async ({params}) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

const Post = ({postData}) => {
  return (
      <Layout>
        <Head>
          {postData.title}
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date}/>
          </div>
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </article>
      </Layout>
  )
}

export default Post;
