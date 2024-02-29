import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");


  const api ={
    key: "249dbd17a9cf0ce48e16cc5a749b070d",
    base: "https://api.openweathermap.org/data/2.5/",
  }
  
  const searchPressed= async ()=> {
     try {
       const res= await fetch(
        `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
       );
       const data= await res.json();
      console.log(data)
     } catch (error) {
      console.error(error)
     }
  }

  return (
    <>
      <div className=" grid grid-flow-row grid-rows-4 h-screen w-full bg-purple-200 ">
        <div className="grid grid-flow-row  grid-rows-3 ">
          <div className="grid bg-red-300 h-full row-span-2 place-items-center text-4xl ">
            weather app
          </div>
          <div className=" grid grid-flow-col bg-yellow-300 h-full place-content-center  gap-2">

          <input
            className="h-12 w-full p-4 m-4 rounded-md "
            placeholder="enter city/name..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="w-20 h-12 p-4 m-4 border-2 rounded-md "
            onClick={searchPressed}
          >
            search
          </button>
          </div>
       
        </div>

        <div className=" grid row-span-3 bg-blue-400 h-full w-full place-content-center">
          hello2
        </div>
      </div>
    </>
  );
}

export default App;
