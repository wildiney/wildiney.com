import LinkTree from "./components/LinkTree";

export default async function Page() {

  const response = await fetch(`https://www.wildiney.com/api/linktree`);
  const data = await response.json();

  return (
    <>
      <LinkTree data={data} />
    </>
  );
}