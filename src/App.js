import React, { useRef, useState } from "react";
import { useForm } from "./hooks/useForm";
import { Hello } from "./hello.component";
import { useMeasure } from "./hooks/useMeasure";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });


  const inputRef = useRef()
  const hello = useRef(()=>console.log('hello'))

  const [showHello, setShowHello] = useState(true)

  // useLayoutEffect(()=>{
  //   console.log(inputRef.current.getBoundingClientRect())
  // },[])
  const [rect, inputRef2] = useMeasure([])

  return (
    <div>

      <>
        <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />}
        <input
          ref={inputRef}
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          ref={inputRef2}
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button
         onClick={()=>{
           inputRef.current.focus()
            hello.current()
          }}> focus </button>
      </>
    </div>
  );
};

export default App;