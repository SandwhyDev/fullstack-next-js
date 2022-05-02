import React from "react";
import Card from "../components/Card";
import Form from "../components/Form";

const App = () => {
  return (
    <div className="w-screen h-screen flex ">
      <div className="w-[30%] p-10 ">
        <Form />
      </div>
      <div className="w-[70%] p-10 flex flex-wrap gap-2 overflow-y-scroll ">
        <Card />
      </div>
    </div>
  );
};

export default App;
