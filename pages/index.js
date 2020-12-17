import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import {TimelineProp} from "../components/icons";
import Layout from '../components/layout/Layout';
export default function Home() {
  return (
    <div className={styles.container}>
   {/* home <TimelineProp /> */}
   <Layout />

    </div>
  )
}
