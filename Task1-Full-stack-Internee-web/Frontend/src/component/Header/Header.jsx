import { useRouter } from "next/router";
import styles from "./Header.module.css";

export default function(){
    const router = useRouter();

    return(
        <div className={styles.headerMainDiv} id="top">
            
            {/* logo and text on left */}
            <div className={styles.interneeLogo} onClick={() => {router.push("/")}}>

                {/* logo img */}
                <img src="/images/1st-logo.jpg" alt="" />

                <div>
                    <strong>
                        Internee<span>.pk</span>
                    </strong>

                    <small>VIRUAL INTERNSHIP PLATFORM</small>
                </div>
            </div>

            <div className={styles.menuBtn}>
                <i class="bi bi-list"></i>
            </div>

            {/* nav bar */}
            <div className={styles.navBar}>
                <span onClick={() => {router.push("/")}}>Home</span>
                <span onClick={() => {router.push("/about")}}>About</span>
                <span onClick={() => {router.push("/internships")}}>Interships</span>
                <span onClick={() => {router.push("/contact")}}>Contact</span>
                <span onClick={() => {router.push("https://lms-internee-pk.great-site.net/")}}>LMS</span>
                <span onClick={() => {router.push("https://www.internee.pk/soon.html")}}>Job portal</span>
            </div>

            {/* Internee Portal button div */}
            <div className={styles.jobPortalButton}>
                Internee Portal
            </div>
        </div>
    )
}