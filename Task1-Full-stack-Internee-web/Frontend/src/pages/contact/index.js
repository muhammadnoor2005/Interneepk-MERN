import Contact from "@/component/Contact/Contact";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import NavSection from "@/component/NavSection/NavSection";
import Head from "next/head";

export default function(){
    return(
        <div>
             <Head>
                <title>
                Internee.pk | Contact
                </title>
            </Head>

            <Header/>
            <NavSection menu={"Contact"} text={"Get in touch"}/>

           <Contact/>

           <Footer/>
        </div>
    )
}