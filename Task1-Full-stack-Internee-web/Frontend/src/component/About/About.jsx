import { useRouter } from "next/router";
import styles from "./About.module.css";

export default function(){
    const router = useRouter();

    return(
        <div className={styles.mainDiv}>
            {/* txt div */}
            <div className={styles.txtDiv}>
                <h2>Introducing Internee.pk</h2>
                <p>The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</p>

                <div className={styles.btnsDiv}>
                    {/* Explore internships btn */}
                    <div className={styles.exploreInternshipBtn} onClick={() => {router.push("/internships")}}>
                        <span>Explore Internships</span>
                    </div>

                    {/* Contact us btn */}
                    <div className={styles.contactUsBtn}  onClick={() => {router.push("/contact")}}>
                        Contact us
                    </div>
                </div>
            </div>

            {/* img div */}
            <div className={styles.imgDiv}>
                <img src="/images/horizontal-shot-happy-mixed-race-females.jpg" alt="people" />
            </div>
        </div>
    )
}