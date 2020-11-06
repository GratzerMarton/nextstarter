import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Nav from "../components/nav"
import axios from "axios"
import Card from "../components/card"
 function Home(abilitylist) {
   console.log(abilitylist)
  return (<>
  <Nav></Nav>
    <div>
    <div className="w-full  flex-wrap flex justify-between">
    {abilitylist.abilitylist.results.map((post) => (
        <Card name={post.name} url={post.url} ></Card>
      ))}
    </div>
    </div>
   
  </>
  )
}

export async function getStaticProps() {
    
  const res = await fetch(`https://pokeapi.co/api/v2/ability`);
  const abilitylist =  await res.json()
console.log(abilitylist.results)
  return {
      props: {
          abilitylist,
      },
  }
}

export default Home