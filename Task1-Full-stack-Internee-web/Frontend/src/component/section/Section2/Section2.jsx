import { useRouter } from "next/router";
import styles  from "./Section2.module.css";

export default function(){
    const router = useRouter();

    return(
        <div className={styles.section2MainDiv}>
            {/* name and pic of founder */}
            <div className={styles.founderImg}>
                <img src="/images/founder.jpg" alt="hammad" />

                <div className={styles.nameDivOuterDiv}> 
                    <div className={styles.nameDiv}>
                        <h4>Hammad Sheikh</h4>
                        <p>Founder</p>
                    </div>
                </div>
            </div>
            {/* text block some intro text */}
            <div className={styles.textBlock}>
                <div className={styles.textBlockText}>
                    <h2>Welcome to Internee.pk</h2>

                    <p>
                    Our internship program is designed to give students the opportunity to work on meaningful projects and tasks, while also receiving mentorship and guidance from experienced professionals in the field. Our goal is to help interns develop the skills and knowledge they need to succeed in their careers, while also building a strong network of talented individuals who may become valuable members of our team in the future. If you're looking for a challenging and rewarding internship experience, we invite you to explore our program and 
                    <span onClick={() => {router.push("/internships")}}>&nbsp; Apply Today</span>
                    </p>
                </div>

                {/* two btns */}
                <div className={styles.btnsBlock}>
                    <div className={styles.knowUsBtn} onClick={() => {router.push("/about")}}>Get to know us</div>
                    <div className={styles.exploreBtn} onClick={() => {router.push("/internships")}}>Explore Internships</div>
                </div>
            </div>

            {/* name nad pic of CMO */}
            <div className={styles.CMOImg}>
                <img src="/images/rayyan.jpg" alt="rayyan" />
                
                <div className={styles.nameDivOuterDiv}> 
                    <div className={styles.nameDiv}>
                        <h4>Rayyan Zain</h4>
                        <p>CMO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}