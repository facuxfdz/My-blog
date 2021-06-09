import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hello, my name's <b>Facundo</b> and i'm a 21-year-old Systems engineering student
          from Buenos Aires, Argentina.
        </p>
        <p>Solve problems is my main hobbie, that's why i like maths, algorithms and anything that can bring some problem.</p>
        <i>
          This website is built using Next.js (you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </i>
      </section>
    </Layout>
  )
}
