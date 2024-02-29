import React, {
  ReactElement,
  ReactHTMLElement,
  useEffect,
  useState,
} from "react";
import logo from "./logo.svg";
import hot from "../src/Assets/png/hot.png";
import humid from "../src/Assets/png/humid.png";
import night from "../src/Assets/png/night.png";
import rain from "../src/Assets/png/rain.png";
import sun from "../src/Assets/png/sun.png";
import sunnyClound from "../src/Assets/png/sunny-cloud.png";
import sunnyRainny from "../src/Assets/png/sunny-rainny.png";
import thunder from "../src/Assets/png/thunder.png";
import windySunny from "../src/Assets/png/windy-sunny.png";

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  name: string;
  timezone: string;
  main: {
    temp: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    main: string;
    icon: string;
    description: string;
  }[];
  base: string;
  wind: {
    speed: number;
  };
}

function App() {
  const [search, setSearch] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const api = {
    key: "249dbd17a9cf0ce48e16cc5a749b070d",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const searchPressed = async () => {
    try {
      console.log("fetching data");
      const res = await fetch(
        `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
      );
      const jsonData: WeatherData = await res.json();
      console.log(jsonData);
      setWeather(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  try {
    var weatherName = weather?.name;
    var weatherMainTemp = weather?.main.temp;
    var weatherMainTempMax = weather?.main.temp_max;
    var weatherMainTempHumidity = weather?.main.humidity;

    var weatherMain = weather?.weather[0].main;
    var weatherDesc = weather?.weather[0].description;
    var weatherBase = weather?.base;

    var speed = weather?.wind.speed;
    var timeZone = weather?.timezone;
    var WeatherIcon = weather?.weather[0].icon;
    var corLong = weather?.coord.lon;

    console.log(weatherMain);
  } catch (error) {
    console.log(error);
  }

  let data: string = sun;
  let BackGround: string = "bg-red-200";

  try {
    switch (WeatherIcon) {
      case "50n":
        data = sunnyClound;
        BackGround = "bg-yello-200";
        break;

      case "01n":
        data = sunnyClound;
        break;

      case "02n":
        data = sunnyClound;
        break;

      case "03n":
        data = sunnyClound;
        break;

      case "04n":
        data = windySunny;
        break;

      case "09n":
        data = sunnyRainny;
        break;

      case "10n":
        data = rain;
        break;

      case "11dn":
        data = thunder;
        break;

      case "13n":
        data = windySunny;
        break;

      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <div
        // style={{background:(red)}}
        className={
          " grid grid-flow-row grid-rows-4 h-screen w-full  " + BackGround
        }
      >
        <div className="grid grid-flow-row  grid-rows-3 ">
          <div className="grid  h-full row-span-2 place-items-center text-4xl ">
            weather app
          </div>
          <div className=" grid grid-flow-col bg-yellow-300 h-full place-content-center  gap-2">
            <input
              className="h-12 w-full p-3 rounded-md "
              placeholder="enter city/name..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="w-20 h-12 p-4 border-2 rounded-md place-content-center grid border-black "
              onClick={searchPressed}
            >
              search
            </button>
          </div>
        </div>

        <div className=" grid row-span-3 grid-rows-8 grid-cols-4 gap-2 p-2 bg-blue-400 h-full w-full place-content-center">
          <p className=" h-full w-full grid col-span-4 row-span-3 items-center justify-center flex-row border-2 rounded-lg text-2xl ">
            {/* <div className=" w-12">{pngData}</div> */}
            <div className=" w-32 grid place-items-center">
              <img src={data} alt="" />
            </div>
          </p>
          <p className="h-full w-full grid col-span-4 items-center justify-center flex-row bg border-2 rounded-lg text-2xl ">
            city-{weatherName}
          </p>
          <p className="h-full w-full grid  items-center justify-center flex-row border-2 rounded-lg text-2xl ">
            temperature- {weatherMainTemp}
          </p>
          <p className="h-full w-full grid  items-center justify-center flex-row border-2 rounded-lg text-2xl ">
            weather- {weatherMain}
          </p>
          <p className="h-full w-full grid  col-span-2 items-center justify-center flex-row border-2 rounded-lg text-2xl  ">
            description- {weatherDesc}
          </p>

          <p className="h-full w-full grid  items-center justify-center flex-row border-2 rounded-lg text-2xl ">
            timezone- {timeZone}
          </p>
          <p className="h-full w-full flex items-center justify-center flex-row border-2 rounded-lg text-2xl ">
            icon- {WeatherIcon}
          </p>
          <p className="h-full w-full flex items-center justify-center flex-row border-2 rounded-lg text-2xl ">
            lon- {corLong}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
