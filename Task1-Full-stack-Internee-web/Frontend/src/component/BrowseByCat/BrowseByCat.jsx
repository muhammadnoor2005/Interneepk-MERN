import styles from "./BrowseByCat.module.css";
import SingleCategory from "./SingleCategory/SingleCategory";

export default function(){
    return(
        <div className={styles.mainDiv}>
            <div className={styles.heading}>
                <h2>Browse by Categories</h2>
            </div>

            <div className={styles.categories}>
                <SingleCategory category={"Web Designing"} logo={"bi bi-window"} count={5} link={"65c32e14b9f66a88bea7d0cf"}/>
                <SingleCategory category={"Web Development"} logo={"bi bi-globe"} count={5} link={"65c32e14b9f66a88bea7d0d0"}/>
                <SingleCategory category={"CRM's & Chatbot Development"} logo={"bi bi-robot"} count={4} link={"65c32e14b9f66a88bea7d0d1"}/>
                <SingleCategory category={"Graphic Designing & 3D Modeling"} logo={"bi bi-vector-pen"} count={5} link={"65c32e14b9f66a88bea7d0d4"}/>
                <SingleCategory category={"Mobile Application development"} logo={"bi bi-phone"} count={6} link={"65c32e14b9f66a88bea7d0d5"}/>
            </div>
        </div>
    )
}