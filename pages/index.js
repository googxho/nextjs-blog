import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[生活很小，世界很大🌏]</p>
        <p>
          <Link href="/posts/first-post">详情页</Link>
        </p>
      </section>
    </Layout>
  );
}
