import React, { useEffect, useRef, useState } from "react";
import { useForm } from "./hooks/useForm";
import { useFetch } from "./hooks/useFetch";
import { Hello } from "./hello.component";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const inputRef = useRef();

  const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      
      <>
        <input
          ref={inputRef}
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
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
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          focus
        </button>
      </>
    </div>
  );
};

export default App;
