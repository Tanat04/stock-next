import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function employeePage(props) {
  const { employee } = props;

  if (!employee) return (<div>Loading...</div>)
  return (
    <>
      <Head>
        <title>employees</title>
      </Head>
      <h1>{employee.first_name}</h1>
      <div>
        <p>${employee.gender}</p>
        <p>${employee.email}</p>
        <p>${employee.phone}</p>
        <p>${employee.age}</p>
        <p>${employee.job_title}</p>
        <p>${employee.department}</p>
        <p>${employee.salary}</p>
        <p>${employee.years_of_experience}</p>
      </div>
      <Link href="/employee">Back to employee List</Link>
    </>
  )
}

export async function getServerSideProps(context) {
  console.log(`Fetching employee ID: ${context.params['id']}`)
  console.debug(`Fetching ${process.env.APIURL}employee/${context.params['id']}`)
  const ret = await fetch(`${process.env.APIURL}employee/${context.params['id']}`)
  const employee = await ret.json()
  console.log(employee)
  return {
    props: {
      employee
    }
  }

}