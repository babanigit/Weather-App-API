import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const api = {
    key: "249dbd17a9cf0ce48e16cc5a749b070d",
    base: "https://api.openweathermap.org/data/2.5/",
    base2: "https://api.openweathermap.org/data/3.0/",
    base3:
      "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}",
  };

  const [search, setSearch] = useState("");

  // here we are storing the data from api
  const [weather, setWeather] = useState({});

  const searchPressed = async () => {
    console.log("search... " + search);

    // getting data from api
    // fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setWeather(result);
    //     console.log("fetching data... ");
    //     console.log(result);
    //   });

    // using await
    const res = await fetch(
      `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
    );
    console.log(res);
    try {
      const data = await res.json();
      setWeather(data);
      console.log("fetching data... ");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // var weatherName;
  try {
    var weatherName = weather.name;
    var weatherMainTemp = weather.main.temp;
    var weatherMain = weather.weather[0].main;
    var weatherDesc = weather.weather[0].description;
  } catch (error) {
    console.log("caught error... " + error);
    // alert("enter data")
  }

  return (
    <>
      {/* weather */}

      {/* div 1 */}
      <div className=" w-screen h-screen   bg-gray-800 text-white grid grid-rows-3 gap-3">
        <div className=" w-screen p-2  grid grid-rows-3 justify-around items-center">
          <div className=" w-screen h-full grid row-span-2 rounded-3xl justify-center items-center bg-slate-600 text-white">
            WEATHER APP
          </div>

          {/* its align in horizontal  */}
          <div className=" flex gap-2">
            <input
              className=" text-black h-12 w-full p-4 m-4 rounded-md "
              placeholder="enter city/name..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              className="w-20 h-12 p-4 m-4 border-2 rounded-md  bg-gray-200 text-black"
              onClick={searchPressed}
            >
              search
            </button>
          </div>
        </div>

        {/* div 2 */}
        <div className=" w-full h-full p-2 grid justify-center items-center grid-cols-2 gap-1 row-span-2">
          {/* <p className=" h-full w-full flex items-center justify-center flex-row bg-slate-500 col-span-2 " >data..</p> */}
          <p className=" h-full w-full flex items-center justify-center flex-row bg-slate-700 border-2 rounded-lg text-2xl ">
            city-{weatherName}
          </p>
          <p className=" h-full w-full flex items-center justify-center flex-row bg-slate-700 border-2 rounded-lg text-2xl ">
            temperature- {weatherMainTemp}
          </p>
          <p className=" h-full w-full flex items-center justify-center flex-row bg-slate-700 border-2 rounded-lg text-2xl ">
            weather- {weatherMain}
          </p>
          <p className=" h-full w-full flex items-center justify-center flex-row bg-slate-700 border-2 rounded-lg text-2xl  ">
            description- {weatherDesc}
          </p>
        </div>
      </div>

      {/* react logo */}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
