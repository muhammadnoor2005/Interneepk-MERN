import { useRouter } from "next/router";
import styles from "./BottomFooter.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

export default function(){
    const router = useRouter();
    // scroll to header
    const moveToTop = () => {
        const top = document.getElementById("top");
        top.scrollIntoView({ behavior: 'smooth' });
    }
    return(
        <div className={styles.mainDiv}>
            <div className={styles.copyrightDiv}>
                <span>Copyright  Internee.pk 2024</span>
                <span onClick={() => {router.push("https://www.internee.pk/policy.html")}}>Privacy Policy Terms</span>

                <div className={styles.socialsDiv}>
                    <div onClick={() => {router.push("https://twitter.com/Internee_pk")}}><FaTwitter/></div>

                    <div onClick={() => {router.push("https://www.facebook.com/profile.php?id=100092672087043")}}><FaFacebook/></div>

                    <div onClick={() => {router.push("https://www.linkedin.com/in/internee-pk-1ba44a276/")}}><FaLinkedin/></div>

                    <div onClick={() => {router.push("https://www.instagram.com/internee.pk/")}}><FaInstagram/></div>

                    <div onClick={() => {router.push("https://www.youtube.com/channel/UCKmNYb6PiShShRf-ZI2O8Ag")}}><FaYoutube/></div>  
                </div>
            </div>

            <div className={styles.rightendDivWithArrow}>
                <div>
                    Powered By: <span onClick={() => {router.push("http://techviochats.epizy.com/?i=1")}}>Techvio Chats</span>
                </div>
                <div className={styles.arrowUp} onClick={moveToTop}>
                    <FaArrowUpLong/>
                </div>
            </div>
        </div>
    )
}