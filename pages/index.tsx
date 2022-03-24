import LinkTree from "../Components/linktree";

export default function Home({ data }) {
  return <LinkTree data={data} />;
}

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/linktree`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
