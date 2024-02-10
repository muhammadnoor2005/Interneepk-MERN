import About from "@/component/About/About";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import NavSection from "@/component/NavSection/NavSection";
import Reviews from "@/component/Reviews/Reviews";
import Head from "next/head";

export default function(){
    return(
        <div>
            <Head>
                <title>
                About | Internee.pk
                </title>
            </Head>
            <Header/>
            <NavSection menu={"About"} text={"About"}/>
            <About/>
            <Reviews/>
            <Footer/>
        </div>
    )
}