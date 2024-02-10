import { useRouter } from "next/router";
import styles from "./NavSection.module.css";


// backdround as an image and shows in which menu we are in currently
export default function({menu,text}){
    const router = useRouter();
    return(
        <div className={styles.mainDiv}>
            <div className={styles.imgDiv}>
                <img src="/images/close-up-young-business-team-working-2.jpg" alt="teamworking" /> 
            </div>

            <div className={styles.navMenu}>
                <h1>{text}</h1>
                <div className={styles.navMenuPosition}>
                    <div>
                        <span className={styles.home} onClick={() =>{router.push("/")}}>Home</span>
                        <span> &nbsp; / &nbsp;{menu}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}