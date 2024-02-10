import { useRouter } from "next/router";
import styles from "./Contact.module.css";
import { useState } from "react";

export default function(){
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const handleFullName = (e) => {
        setFullName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const router = useRouter();
    return(
        <div className={styles.mainDiv}>
            <div className={styles.mapAndContactDiv}>

                {/* contains map */}
                <div className={styles.mapDiv}>
                     <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14468.480271972865!2d66.9630595!3d24.962029249999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1684627801858!5m2!1sen!2s" width="100%" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                {/* contains address email etc  */}
                <div className={styles.contactDiv}>

                    {/* Office location */}
                    <div className={styles.singleInfoDiv}>
                        <i class="bi bi-buildings"></i>
                        <div>
                            <p>Office</p>
                            <span>National Incubation Center, Karachi, Pakistan</span>
                        </div>
                    </div>

                    {/* Linkedin link */}
                    <div className={styles.singleInfoDivWBG}>
                        <i class="custom-icon bi-linkedin"></i>
                        <div>
                            <p>Linkedin</p>
                            <span  onClick={() => {router.push("https://www.linkedin.com/in/internee-pk-1ba44a276/")}}>internee-pk</span>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className={styles.singleInfoDiv}>
                        <i class="custom-icon bi-telephone"></i>
                        <div>
                            <p>Phone</p>
                            <span  onClick={() => {router.push("https://api.whatsapp.com/send/?phone=%2B923453191638&text&app_absent=0")}}>
                                <span>+92 345 3191638</span>
                                <br />
                                <span>+92 349 2861021</span>
                            </span>
                        </div>
                    </div>

                    {/* Email */}
                    <div className={styles.singleInfoDivWBG}>
                        <i class="custom-icon bi-envelope"></i>
                        <div>
                            <p>Email</p>
                            <span  onClick={() => {router.push("mailto:info@internee.pk")}}>info@internee.pk</span>
                        </div>
                    </div>
                </div>
            </div>

            <form className={styles.projectInMindDiv} onSubmit={handleSubmit} id="form">
                <div>
                    <h2>Project in mind? Let’s Talk</h2>
                    {/* FUll name and email address div */}
                    <div className={styles.fullNameAndEmailAddress}>
                        <div>
                            <label>Full name</label>
                            <br />
                            <input type="text" placeholder="Hammad Sheikh" required onChange={handleFullName}/>
                        </div>

                        <div>
                            <label>Email Address</label>
                            <br />
                            <input type="email" placeholder="hammadsheikh@gmail.com" required onChange={handleEmail}/>
                        </div>

                    </div>
                    {/* "Message div" */}
                    <div className={styles.messageDiv}>
                        <label>Message</label>
                        <br />
                        <textarea type="text" placeholder="What can we help you?" required onChange={handleMessage}/>
                    </div>
                    <div className={styles.sendMsgBtn}>
                        <button>Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    )
}