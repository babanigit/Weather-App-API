import React, { useState } from "react";
import Haze from "./assets/thunder.jpg";
import Content from "./Content";
const Background = () => {
  const [data, setData] = useState("");

  console.log(data + " this is data");

  return (
    <div
      style={{
        backgroundImage: `url(${Haze})`,
      }}
      className=" h-screen w-full "
    >
      <Content setData={setData} />
    </div>
  );
};

export default Background;
