import Header from "@/component/Header/Header";
import styles from "./applyInternship.module.css";
import Head from "next/head";
import FeaturedInternships from "@/component/FeaturedInternships/FeaturedInternships";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "../../axios";
import OtherInternships from "@/component/OtherInternships/OtherInternships";
import Footer from "@/component/Footer/Footer";

export default function(){
    const [featuredInternArr,setFeaturedInternArr] = useState();

    const router = useRouter();
    const {applyInternship} = router.query;

    const [internshipArr,setInternshipsArr] = useState();
    
    useEffect(() => {
        // getting all the arrays and setting it to internShipArr to map it
        // checking to avoid infinite loop
        if(!internshipArr){
            const fetch = async() => {
                try {
                    const resp = await axios.get("internships");
                    setInternshipsArr(resp.data);
                } catch (err) {
                    console.log(err.message);
                }   
            }

            fetch();
        }

        if(internshipArr){
            const featuredInternship = internshipArr.find(i => i._id === applyInternship);
            setFeaturedInternArr(featuredInternship.branches);
        }
    },[internshipArr]);


  
    return(
        <div>

            <Head>
                <title>
                Internee.pk | Job Details
                </title>
            </Head>
            <Header/>

           <FeaturedInternships arr={featuredInternArr} />
           <OtherInternships arr={internshipArr} id={applyInternship}/>

           <Footer/>
        </div>
    )
}