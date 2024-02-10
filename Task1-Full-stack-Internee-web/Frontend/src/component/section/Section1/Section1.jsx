import { useRouter } from "next/router";
import styles from "./Section1.module.css";

export default function(){
    const router = useRouter();
    return(
        <div className={styles.section1MainDiv}>
            <img src="/images/close-up-young-business-team-working.jpg" alt="team-working" />
            <div className={styles.section1TxtDiv}>
                <h6>Are you looking for your dream Intership ?</h6>
                <h1>Join <br /> Internee.pk now..!</h1>

                <p>
                    Pakistan's Virtual Intership Platform Powered By&nbsp;
                    <span onClick={() => {router.push("https://techviochats.com/")}}>TechVioChats</span>
                </p>

                <div className={styles.browseIntershipBtnDiv} onClick={() => {router.push("/internships")}}>
                    <span>Browse Interships</span>
                </div>
            </div>

        </div>
    )
}