import React, { useState } from "react";
import { useForm } from "./useForm";

function expensiveInitState() {
  //large calculations here
  return 10;
}

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
