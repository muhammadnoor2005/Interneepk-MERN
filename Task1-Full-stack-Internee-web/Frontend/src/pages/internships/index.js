import { useEffect, useState } from "react";
import styles from "./internships.module.css";
import axios from "../../axios";
import MappedInternships from "@/component/MappedInternships/MappedInternships";
import Head from "next/head";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import NavSection from "@/component/NavSection/NavSection";

export default function(){
    const [internshipArr,setInternshipsArr] = useState();
    
    useEffect(() => {
        // getting all the arrays and setting it to internShipArr to map it
        const fetch = async() => {
            try {
                const resp = await axios.get("internships");
                setInternshipsArr(resp.data);
            } catch (err) {
                console.log(err.message);
            }   
        }

        fetch();
    },[]);

    // this much interships needed
    let sortedInternships;
    if(internshipArr){
         sortedInternships = internshipArr.slice(3,12);
    }
    console.log(sortedInternships);
    return(
        <div>

            <Head>
                <title>
                Internee.pk | Job Listing
                </title>
            </Head>

            <Header/>
            <NavSection menu={"Internships listings"} text={"Internships listings"}/>

            <div className={styles.mainDiv}>
                <div className={styles.headingDiv}>
                    <h3>Internships on Different Tech Domain</h3>
                </div>

                <MappedInternships internshipArr={sortedInternships}/>
            </div>

            <Footer/>
        </div>
    )
}