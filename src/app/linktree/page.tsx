import LinkTree from "../components/LinkTree";

export const metadata = {
  title: "Wildiney Fernando Pimentel - LinkTree"
}

export default async function Home() {

  const response = await fetch(`${process.env.URL}/api/linktree`);
  const data = await response.json();

  return (
    <>
      <LinkTree data={data} />
    </>
  );
}