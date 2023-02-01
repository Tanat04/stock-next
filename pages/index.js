import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tanat Page</title>
      </Head>
      <h1>Hello, Welcome to my page!</h1>
      <p>This is a sample page for Tanat</p>
      <Link href="/about">About</Link>
    </>
  );
}
