import React, { useEffect, useState } from "react";
import { useForm } from "./hooks/useForm";
import { useFetch } from "./hooks/useFetch";
// import { Hello } from "./hello.component";

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

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />} */}
      <>
        <input
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
      </>
    </div>
  );
};

export default App;
