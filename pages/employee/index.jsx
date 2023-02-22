import Head from 'next/head'
import Link from 'next/link'

export default function Home(props) {
  const { employee } = props;

  if (!employee) return (<div>Loading...</div>)

  const list = employee.map((employee) => (
    <li key={employee.id}>
      <Link href={`/employee/${employee.id}`}>
        {employee.first_name}
      </Link>
    </li>
  ))

  return (
    <>
      <Head>
        <title>employee</title>
      </Head>
      <h1>employee</h1>
      <div>
        <ul>
          {list}
        </ul>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  // employee.json is in /public
  console.debug(`Fetching ${process.env.APIURL}employee`)
  const ret = await fetch(`${process.env.APIURL}employee`)
  console.log(ret)
  const employee = await ret.json()
  console.log({ employee })
  return {
    props: {
      employee
    }
  }
}