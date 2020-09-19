import React, { useState } from "react";

const InputHooks = (val) => {
  const [name, setname] = useState(val);

  const inputhandle = (e) => {
    setname(e.target.value);
  };

  const clear = () => {
    setname("");
  };
  return [name, inputhandle, clear];
};

export default InputHooks;
