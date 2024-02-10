import { useEffect, useState } from "react";
import styles from "./FeaturedInternships.module.css";
import { useRouter } from "next/router";

export default function({arr,id}){
    const router = useRouter();
    
    if(!arr){
        return <>loading</>
    }

    const mappedDomains = arr.map((d,index) => {
        return(
            <div key={d._id}>
                <div className={index % 2 === 0 ?styles.domainCardWoutBG:styles.domainCardWBG}>
                     
                    <div className={styles.flexDiv}>
                        {/* img div */}
                        <div className={styles.imgDiv}>
                            <img src={d.imgURL} alt="" />
                        </div>

                        {/* location, duration and domain name div */}
                        <div className={styles.nameLocDuraDiv}>

                            {/* DOmain name */}
                            <h4>{d.name} Internship</h4>

                            {/* location and duration div */}
                            <div className={styles.locAndDuraDiv}>
                                <div className={styles.locationDiv}>
                                    <i class="custom-icon bi-geo-alt me-1"></i>
                                    <span>Karachi, Pakistan</span>
                                </div>

                                <div className={styles.durationDiv}>
                                    <i class="custom-icon bi-clock me-1"></i>
                                    <span>1 Month</span>
                                </div>

                                <div className={styles.typeAndRemoteDiv}>
                                    <div className={styles.internshipTxtGreenBG}>Internship</div>
                                    <div className={styles.remoteTxt}>Remote</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* "Apply Now"  btn */}
                    <div className={styles.applyNowBtn} onClick={() => {router.push(d.applyURL)}}>
                        <div>Apply Now</div>
                    </div>
                </div>
            </div>
        )
    });
   

    return(
        <div className={styles.mainDiv}>
            <div className={styles.headingDiv}>
                <h2>Featured Internships</h2>
                <p>Grab your&nbsp;<strong>Internships</strong>&nbsp;on your favourite domain now..!</p>
            </div>

            <div className={styles.mappedDomainsDiv}>
                {mappedDomains}
            </div>
        </div>
    )
}