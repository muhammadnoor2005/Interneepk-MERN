import { useEffect, useState } from "react";
import axios from "../../axios";
import styles from "./MappedInternships.module.css";
import { useRouter } from "next/router";

export default function({internshipArr}){
    const router = useRouter();

    if(!internshipArr){
        return<>
        loading</>
    }
    const arr = internshipArr.map((i) => {
        const apply = () => {
            if(i.applyURL === ""){
                router.push(`/${i._id}`);
            }else{
                router.push(i.applyURL);
            }
        }
        
        return(
            <div key={i._id} className={styles.singleCard}>
                <div className={styles.imgDiv}>
                    <img src={i.imgURL}/>
                </div>
                
                {/* div having name location duraiton and apply now btn */}
                <div className={styles.detailsDiv}>
                    <h4>{i.name}</h4>

                    {/* loaction and duration div */}
                    <div className={styles.locAndDura}>
                        {/* location and its icon */}
                        <div>
                            <i class="custom-icon bi-geo-alt me-1"></i>
                            <span>{i.location}</span>
                        </div>

                        {/* duraiton and its icon */}
                        <div>
                            <i class="custom-icon bi-clock me-1"></i>
                            <span>{i.duration}</span>
                        </div>
                    </div>
                    
                    {/* apply now button div */}
                    <div className={styles.btnDiv} onClick={apply}>
                        <div>
                            Apply now
                        </div>
                    </div>
                </div>
                
            </div>
        )
    })
    // const [intershipArr,setInternshipsArr] = useState();
    
    // useEffect(() => {
    //     // getting all the arrays and setting it to internShipArr to map it
    //     const fetch = async() => {
    //         try {
    //             const resp = await axios.get("internships");
    //             setInternshipsArr(resp.data);
    //         } catch (err) {
    //             console.log(err.message);
    //         }   
    //     }
    //     fetch();

    //     //  if we recived an id as a prop then exclude that object from the array and set rest arrays to "intershipArr"--- for example we are on page of Mobile APp dev internships programs then we want to show 3 other recommended internships(excluding Mobile APp Dev) on that page
    //     if(id){
    //         const sortedArr = intershipArr.filter(i => i.id !== id);
    //         setInternshipsArr(sortedArr);
    //     };

    //     // when using this component we will provide the count of arrays we want
    //     const arr = intershipArr.slice(0,count + 1);
    //     setInternshipsArr(arr);
    // },[]);

    return(
        <div className={styles.mainDiv}>
            {arr}
        </div>
    )
}