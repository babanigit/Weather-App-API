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

  const searchPressed = () => {
    console.log("search... " + search);

    // getting data from api
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log("fetching data... ");
        console.log(result);
      });
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
      <div className=" w-screen h-screen py-40 bg-purple-200 grid justify-center items-center ">
        <div>
          <p> Weather</p>
          <input
            placeholder="enter city/name..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}> search</button>
        </div>
        <div>
          <p>data..</p>
          <p>{weatherName}</p>
          <p>{weatherMainTemp}</p>
          <p>{weatherMain}</p>
          <p>{weatherDesc}</p>
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
