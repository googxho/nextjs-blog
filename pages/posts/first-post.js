import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Layout from '../../components/layout';
import Alert from '../../components/alert';
import useSWR from 'swr';

function Profile() {
  // Next.js 团队创建了一个名为 SWR 的 React 数据获取钩子。
  // 如果您在客户端获取数据，我们强烈推荐使用它。
  // 它支持缓存、重新验证、焦点跟踪、定时重新获取等功能。
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
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
