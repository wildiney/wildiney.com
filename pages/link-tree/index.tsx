import Head from "next/head";
import LinkTree from "../../Components/MyLinkTree";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Wildiney Fernando Pimentel - Link-Tree</title>
      </Head>
      <LinkTree data={data} />
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.URL}/api/linktree`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};