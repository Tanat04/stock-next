import Head from "next/head";
import Link from "next/link";
import LoginButton from "../components/login-btn";
export default function Home() {
  return (
    <div className="center">
      <Head>
        <title>Tanat Page</title>
      </Head>
      <h1>Hello, Welcome to my page!</h1>
      <div>
        <LoginButton />
      </div>
      <Link href="/about">About</Link> |<Link href="/blogs">Blogs</Link>
    </div>
  );
}
