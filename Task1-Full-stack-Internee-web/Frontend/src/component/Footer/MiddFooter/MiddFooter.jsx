import styles from "./MiddFooter.module.css";
import styles2 from "../../Header/Header.module.css";
import { useRouter } from "next/router";

export default function(){
    const router = useRouter();
    return(
        <div className={styles.mainDiv}>
            {/* CONATCT INFO DIV */}
            <div className={styles.contactInfoDiv}>
                <div className={styles2.interneeLogo}>

                    {/* logo img */}
                    <img src="/images/1st-logo.jpg" alt="" />

                    <div>
                        <strong>
                            Internee<span>.pk</span>
                        </strong>

                        <small>VIRUAL INTERNSHIP PLATFORM</small>
                    </div>
                </div>

                {/* interee.pk link with globe icon */}
                <div className={styles.contactInfoSingleDiv}>
                    <i class="custom-icon bi-globe me-1"></i>
                    <span onClick={() => {router.push("https://www.internee.pk/")}}>www.internee.pk</span>
                </div>

                {/* phone number with icon  */}
                <div className={styles.contactInfoSingleDiv}>
                    <i class="custom-icon bi-telephone me-1"></i>
                    <div onClick={() => {router.push("https://api.whatsapp.com/send/?phone=%2B923453191638&text&app_absent=0")}}>
                        <span>+92 345 3191638</span>
                        <br />
                        <span>+92 349 2861021</span>
                    </div>
                    
                </div>

                {/* email with icon */}
                <div className={styles.contactInfoSingleDiv}>
                    <i class="custom-icon bi-envelope me-1"></i>
                    <span onClick={() => {router.push("mailto:info@internee.pk")}}>info@internee.pk</span>
                </div>

            </div>

            {/* COMAPNY DIV */}
            <div className={styles.companyAndResourcesDiv}> 
                <h6>Company</h6>
                <span onClick={() => {router.push("/")}}>Home</span>
                <span onClick={() => {router.push("/about")}}>About</span>
                <span onClick={() => {router.push("/internships")}}>Internships</span>
                <span onClick={() => {router.push("/contact")}}>Contact</span>
            </div>
               
               {/* RESOURCES DIV */}
            <div className={styles.companyAndResourcesDiv}>
                <h6 >Resources</h6>
                <span onClick={() => {router.push("https://www.internee.pk/soon.html")}}>Discord Server</span>
                <span onClick={() => {router.push("https://www.internee.pk/soon.html")}}>Blog</span>
                <span onClick={() => {router.push("https://www.internee.pk/policy.html")}}>Podcast</span>
            </div>

            <div className={styles.getUpdatesDiv}>
                <h6>Get Updates About Internhips</h6>
                
                <div className={styles.inputFieldAndSendBtn}>
                    <div>
                        <i class="bi-person"><a href=""></a></i>
                        <input type="text" placeholder="yourname@gmail.com" />
                    </div>
                    <div className={styles.sendBtnDiv}><i class="bi-send"></i></div>
                </div>
            </div>
        </div>
    )
}