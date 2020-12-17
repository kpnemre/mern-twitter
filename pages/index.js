import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import {TimelineProp} from "../components/icons";
import Layout from '../components/layout/Layout';
import Button from "../components/button/Button"
export default function Home() {
  return (
    <div className={styles.container}>
   {/* home <TimelineProp /> */}
   <Layout>
     <P>MAİN LAYOUT</P>
   <Button  full={true} href={}> click me </Button>

   </Layout>

 

    </div>
  )
}
