import { useEffect, useState } from "react";
import styles from "./RecentInterships..module.css";
import axios from "../../axios";

import MappedInternships from "../MappedInternships/MappedInternships";
import { useRouter } from "next/router";

// home page component
export default function(){
    const router = useRouter();
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
         sortedInternships = internshipArr.slice(0,9);
    }

    return(
        <div className={styles.mainDiv}>
            <div className={styles.recentIntershipTxt}>
                <h2>Recent Internships</h2>
                <p>
                    <strong>Internships came after every two months</strong>&nbsp;
                    Grab your internships on your favourite domain to boost up yourself in the field of Computer technology
                </p>
            </div>

            
            <div>
                {/* 9 internships mapped */}
                <div>
                    <MappedInternships internshipArr={sortedInternships}/>
                </div>

                {/* Browse Internship button */}
                <div className={styles.browseInternshipsBtnDiv} onClick={() => {router.push("/internships")}}>
                    <div>
                        <span>Browse Internship</span>
                    </div>
                </div>
            </div>
        </div>
    )
}