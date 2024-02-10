import { useEffect, useState } from "react";
import MappedInternships from "../MappedInternships/MappedInternships";
import styles from "./OtherInternships.module.css";

export default function({arr,id}){
    const [sortedArr,setSortedArr] = useState();

    useEffect(() => {   
        if(arr){
            const temp = [];

            // want to shhow 3 other internships except the one on which detail page we are in
            for(let i = 0; i < arr.length;i++){
                // we require only 3 interhships to show
                if(temp.length === 3){
                    break;
                }
                if(arr[i]._id !== id){
                    temp.push(arr[i]);
                }
            }
            setSortedArr(temp);
        }
    },[arr]);

        
    if(!arr){
        return<>loading</>
    }

    return(
        <div className={styles.mainDiv}> 
            <div className={styles.txtDiv}>
                <div>
                    <h3>Other Internships</h3>
                    <p><strong>Internships every months&nbsp;</strong>Introducing Internee.pk, the ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</p>
                </div>

                <div className={styles.browseBtn}>
                    
                        Browse Internships
                    
                </div>
            </div>

            <div className={styles.internshipsDiv}>
                <MappedInternships  internshipArr={sortedArr}/>
            </div>
        </div>
    )
}