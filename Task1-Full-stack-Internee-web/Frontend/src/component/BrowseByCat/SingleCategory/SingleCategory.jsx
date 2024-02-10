import { useRouter } from "next/router";
import styles from "./SingleCategory.module.css";

export default function({category,logo,count,link}){
    const router = useRouter();

    return(
        <div className={styles.mainDiv} onClick={() => {router.push(link)}}>
            <div className={styles.logoAndCatNameDiv}>
                <div>
                    <i className={logo}></i>
                </div>
                <small>{category}</small>
            </div>                                                  

            <div className={styles.countDiv}>
                <span>0{count}</span>
            </div>
        </div>
    )
}