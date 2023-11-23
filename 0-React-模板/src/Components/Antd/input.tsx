import React from "react";
import { Input } from "antd";
const App = () => {
  return <Input onPressEnter={(e)=>{
    console.log("内容",e);
  }} placeholder="Basic usage" />;
};
export default App;
