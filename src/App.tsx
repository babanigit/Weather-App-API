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

import daysand from "../src/background/day_sandy.jpg";
import daysnow from "../src/background/daysnow.jpg";
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

interface MyStyle {
  header: {
    backgroundImage: string;
    height: string;
    backgroundSize: string;
    backgroundRepeat: string;
  };
  content: {
    height: string;
    width: string;
    backgroundColor: string;
  };
  bgOpac: string;
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
  let bg: string = daysand;
  let BackGround: string = "bg-red-300";
  let Opacity: string = "bg-opacity-0";

  try {
    switch (WeatherIcon) {
      case "50n":
        data = sunnyClound;
        BackGround = "bg-yellow-200";
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

      case "11n":
        data = thunder;
        break;

      case "13n":
        data = windySunny;
        break;

      case "50d":
        data = sunnyClound;
        BackGround = "bg-yellow-500";
        break;

      case "01d":
        data = sunnyClound;
        // BackGround = "bg-yellow-200";
        // Opacity= "bg-opacity-50"
        bg = daysnow;
        break;

      case "02d":
        data = sunnyClound;
        break;

      case "03d":
        data = sunnyClound;
        break;

      case "04d":
        data = windySunny;
        bg = daysnow;

        break;

      case "09d":
        data = sunnyRainny;
        break;

      case "10d":
        data = rain;
        break;

      case "11d":
        data = thunder;
        break;

      case "13d":
        data = windySunny;
        break;

      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }

  const myStyle: MyStyle = {
    header: {
      // background: 'rgba(0, 0, 0, 0.5)',
      backgroundImage: `url(${bg})`,
      height: "100vh",
      // marginTop: "-70px",
      // fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    content: {
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    bgOpac: "bg-opacity-30",
  };

  return (
    <>
      <div style={myStyle.header}>
        <div
          // style={myStyle.content}
          className={
            " grid grid-flow-row grid-rows-4 h-screen w-full bg-black " +
            myStyle.bgOpac
          }
        >
          <div className="grid grid-flow-row  grid-rows-3 ">
            <div className="grid  h-full row-span-2 place-items-center text-4xl ">
              weather app
            </div>
            <div className=" grid grid-flow-col  h-full place-content-center  gap-2">
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

          <div className=" grid row-span-3 grid-rows-8 md:grid-rows-5 md:grid-cols-1 grid-cols-4 gap-2 p-2 h-full w-full place-content-center">
            <p className=" h-full w-full grid col-span-4 row-span-3 items-center justify-center flex-row border-2 rounded-lg text-2xl ">
              {/* <div className=" w-12">{pngData}</div> */}
              <div className=" w-32 grid place-items-center">
                <img src={data} alt="" />
              </div>
            </p>
            <p className="h-full w-full grid col-span-4 items-center justify-center flex-row bg border-2 rounded-lg text-2xl ">
              city-{weatherName}
            </p>
            <p className="h-full w-full grid md:col-span-4  items-center justify-center flex-row border-2 rounded-lg text-2xl ">
              temperature- {weatherMainTemp}
            </p>
            <p className="h-full w-full grid md:col-span-4   items-center justify-center flex-row border-2 rounded-lg text-2xl ">
              weather- {weatherMain}
            </p>
            <p className="h-full w-full grid md:col-span-4   col-span-2 items-center justify-center flex-row border-2 rounded-lg text-2xl  ">
              description- {weatherDesc}
            </p>

            <p className="h-full w-full md:hidden grid  items-center justify-center flex-row border-2 rounded-lg text-2xl ">
              timezone- {timeZone}
            </p>
            <p className="h-full w-full md:hidden flex items-center justify-center flex-row border-2 rounded-lg text-2xl ">
              icon- {WeatherIcon}
            </p>
            <p className="h-full w-full md:hidden flex items-center justify-center flex-row border-2 rounded-lg text-2xl ">
              lon- {corLong}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
