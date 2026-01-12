import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Layout from '../../components/layout';
import Alert from '../../components/alert';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>详情页</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
        onError={(error) => {
          console.log("[nku]log >> :19 >> FirstPost >> error:", error);
        }}
      />
      <Alert type={'error'}>
        状态错误！
      </Alert>

      <h1>First Post</h1>
    </Layout>
  );
}
