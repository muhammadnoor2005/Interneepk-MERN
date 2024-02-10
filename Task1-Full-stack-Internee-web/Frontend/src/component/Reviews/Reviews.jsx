import { useEffect, useState } from "react";
import styles from "./Reviews.module.css";
import axios from "../../axios";

export default function(){
    const [reviews,setReviews] = useState();

    useEffect(() => {
        // getting all the reviews array and setting it to internShipArr to map it
        const fetch = async() => {
            try {
                const resp = await axios.get("reviews");
                setReviews(resp.data);
            } catch (err) {
                console.log(err.message);
            }   
        }

        fetch();
    },[]);

    if(!reviews){
        return <>laoding</>
    }

    const arr = reviews.slice(0,2);
    const reviewsMapped = arr.map((r) => {
        return(
            <div className={styles.singleReviewCard} key={r.id}>
                <div className={styles.reviewerBioAndRatings}>
                    {/* reviewer info */}
                    <div className={styles.reviewerBio}>
                        <div className={styles.imgDiv}>
                            <img src={r.imgURL} alt={r.id} />
                        </div>

                        {/* name and field  */}
                        <div className={styles.nameAndFieldDiv}>
                            <strong>{r.name}</strong>
                            <small>{r.field}</small>
                        </div>
                    </div>

                    {/* ratings div */}
                    <div className={styles.reviewStars}>
                        <i class="bi-star-fill"></i>
                        <i class="bi-star-fill"></i>
                        <i class="bi-star-fill"></i>
                        <i class="bi-star-fill"></i>
                        <i class="bi-star-fill"></i>
                    </div>
                </div>

                {/* review text  */}
                <div className={styles.reviewTxt}>
                    <h5>
                        {r.review}
                    </h5>
                </div>
                <img src="/images/left-quote.png" alt="quote" className={styles.leftQuote}/>
            </div>
        );
    });

    return(
        <div className={styles.mainDiv}>
            <h2 className={styles.happyInterneeHeading}>Happy Internee Reviews</h2>

            <div className={styles.reviewMapped}>
                {reviewsMapped}
            </div>
        </div>
    )
}