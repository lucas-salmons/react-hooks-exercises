import React, { useRef,useState,useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { useMeasure } from "./hooks/useMeasure";

export const Hello = () => {
  // const renders = useRef(0)
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  //MOVED TO CUSTOM HOOK
  // console.log("hello renders:", renders.current++)
  // const [rect,setRect] = useState({})
  

  // useLayoutEffect(()=>{
  //   setRect(divRef.current.getBoundingClientRect())
  // },[data])

  
  const [rect, divRef] = useMeasure([data])

  return(
    <div>
      <div style={{display: "flex"}}>
        <div ref={divRef}>{!data ? "loading..." : data}</div>
      </div>
      <pre>
        {JSON.stringify(rect,null,2)}
      </pre>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>);
};
