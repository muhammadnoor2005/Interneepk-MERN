import BrowseByCat from '@/component/BrowseByCat/BrowseByCat';
import Footer from '@/component/Footer/Footer';
import Header from '@/component/Header/Header';
import NavSection from '@/component/NavSection/NavSection';
import RecentInterships from '@/component/RecentInterships/RecentInterships';
import Reviews from '@/component/Reviews/Reviews';
import Section1 from '@/component/section/Section1/Section1';
import Section2 from '@/component/section/Section2/Section2';
import Section3 from '@/component/section/Section3/Section3';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  

  return(
    <>
      <Head>
        <title>
          Internee.pk | PAKISTAN'S VIRTUAL INERNSHIP PROGRAM
        </title>
      </Head>

      <Header/>

      <Section1/>
      <Section2/>
      <BrowseByCat/>
      <Section3/> 
      <RecentInterships/>
      <Reviews/>
      <Footer/>
    </>
  )
}

// export async function getServerSideProps(){

//   return{
//       redirect:{
//       destination:"/auth/signup",
//       permanent:false,
//   }
//   };
// };