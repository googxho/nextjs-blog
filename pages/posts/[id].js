import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
 
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);// 文件名的取值为 [id]
  return {
    props: {
      postData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
