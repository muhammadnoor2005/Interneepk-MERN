import styles from "./Section3.module.css";

export default function(){
    return(
        <div className={styles.mainDiv}>
            <div className={styles.allTxtDiv}>
                {/* heading and text div */}
                <div className={styles.headingDiv}>
                    <h2>Launching tech careers with internships,exposure, and networking.</h2>
                    <p>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.</p>
                </div>
                
                {/* 5000+ and 35+ div */}
                <div className={styles.numbersDiv}>
                    <div className={styles.registeredUsersDiv}>
                        <div>5000+</div>
                        <span>Registered users</span>
                    </div>

                    <div className={styles.openingIntershipsDiv}>
                        <div>35+</div>
                        <span>Opening Internships</span>
                    </div>
                </div>
            </div>

            {/* google cloud image */}
            <div className={styles.imgDiv}>
                <img src="/images/people-working-as-team-company.jpg" alt="google" />
            </div>
        </div>
    )
}