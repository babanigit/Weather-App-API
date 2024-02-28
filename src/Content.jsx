import { useState } from "react";

const Content = (props) => {
  const api = {
    key: process.env.REACT_APP_API_KEY || "249dbd17a9cf0ce48e16cc5a749b070d",
    base: "https://api.openweathermap.org/data/2.5/",
    base2: "https://api.openweathermap.org/data/3.0/",
    base3:
      "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}",
  };

  const [search, setSearch] = useState("");

  // here we are storing the data from api
  const [weather, setWeather] = useState({});

  const searchPressed = async () => {
    // getting data from api
    // fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setWeather(result);
    //     console.log("fetching data... ");
    //     console.log(result);
    //   });

    try {
      // using await
      const res = await fetch(
        `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
      );
      const data = await res.json();
      setWeather(data);
      console.log("fetching data... ");
      console.log(data);
    } catch (error) {
      console.log("error while fetching " + error);
    }
  };

  try {
    var weatherName = weather.name;

    var weatherMainTemp = weather.main.temp;
    var weatherMainTempMax = weather.main.temp_max;
    var weatherMainTempHumidity = weather.main.humidity;

    var weatherMain = weather.weather[0].main;
     props.setData(weatherMain)
    //  console.log(weatherMain)
    var weatherDesc = weather.weather[0].description;
    var weatherBase = weather.base;

    var speed = weather.wind.speed;

    console.log(weatherMain)

  } catch (error) {
    console.log("caught error,  null data... " + error);
    // alert("enter data")
  }


  const myStyle = {
    backgroundImage: "url()",
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      {/* weather */}

      {/* div 1 */}
      <div className=" w-screen h-screen   grid grid-rows-3 gap-3">
        <div className=" w-screen p-2  grid grid-rows-3 justify-around items-center">
          <div className=" w-screen h-full grid row-span-2 rounded-3xl justify-center items-center ">
            WEATHER APP
          </div>

          {/* its align in horizontal  */}
          <div className=" flex gap-2">
            <input
              className="  h-12 w-full p-4 m-4 rounded-md "
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

        {/* div 2 */}
        <div className=" w-full h-full p-2 grid justify-center items-center grid-cols-2 gap-1 row-span-2">
          {/* <p className=" h-full w-full flex items-center justify-center flex-row bg-slate-500 col-span-2 " >data..</p> */}
          <p className=" h-full w-full flex items-center justify-center flex-row bg border-2 rounded-lg text-2xl ">
            city-{weatherName}
          </p>
          <p className=" h-full w-full flex items-center justify-center flex-row  border-2 rounded-lg text-2xl ">
            temperature- {weatherMainTemp}
          </p>
          <p className=" h-full w-full flex items-center justify-center flex-row  border-2 rounded-lg text-2xl ">
            weather- {weatherMain}
          </p>
          <p className=" h-full w-full flex items-center justify-center flex-row  border-2 rounded-lg text-2xl  ">
            description- {weatherDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
