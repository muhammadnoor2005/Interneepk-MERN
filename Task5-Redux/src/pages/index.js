import { decrement, increment, incrementByVal } from "@/store/slices/counter";
import { useDispatch, useSelector } from "react-redux"


export default function () {
  const count = useSelector((state) => state.counter); //OR const count = useSelector((state) => state.counter.value)
  console.log(count)
  const dispatch = useDispatch();

  return(
    <div className="mainDiv">
      <h1>{count}</h1>

      <button className="incrementBtn" onClick={() => {dispatch(increment())}}>Increment</button>
      <button className="decrementBtn" onClick={() => {dispatch(decrement())}}>Decrement</button>

      <button className="incrementBy10Btn" onClick={() => {dispatch(incrementByVal(10))}}>Increment by 10</button>
      
    </div>
  )
}


