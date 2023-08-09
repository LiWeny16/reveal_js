import React, { useState } from "react";

function Scode(code: any) {
  const [A, setA] = useState("233");
  const handle = (e) => {
    setA(eval(code.code));
    // console.log(`Clicked ${countRef.current} times`);
  };
  return <button onLoad={handle}>{A}</button>;
}

export default Scode;
