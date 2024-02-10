import styles from "./FooterImg.module.css";

export default function(){
    return(
        <div className={styles.mainDiv}>
            <div className={styles.imgDiv}>
                <img src="/images/millennial-group-young-businesspeople.jpg" alt="people"/>
            </div>

            <div className={styles.txtDiv}>
                <h2>Internships every months</h2>
                <p>Introducing Internee.pk, the ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</p>
            </div> 
        </div>
    )
}