"use client";
import { AppDispatch, RootState } from "../../store/store";
// import { setSelectedQuestion } from "../../store/slices/questionSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
import Searchbtn from "../buttonComp/Searchbtn";
import { useEffect } from "react";
import { fetchWeather } from "../../store/slices/weatherSlice";
import Image from "next/image";

export default function HeroDynamic() {
  const dispatch = useDispatch<AppDispatch>();

  // const router = useRouter();
  const { zipCode } = useSelector((state: RootState) => state.location);
  useEffect(() => {
    // if (zipCode) {
      dispatch(fetchWeather("10035"));
    // }
  }, [zipCode]);
  const weatherState = useSelector((state: RootState) => state.weather);
  // console.log("Weather data:date", weather?.forecast.forecastday[0].date);
  // console.log("Weather data:1", weather?.forecast.forecastday[0].day.condition.text);
  // console.log("Weather data max temp c", weather?.forecast.forecastday[1].day.maxtemp_c);
  // console.log("Weather data max min c", weather?.forecast.forecastday[1].day.mintemp_c);

  // const handleClick = () => {
  //   const questionWithZip = `The Best Internet Near Me ${zipCode}.`;
  //   dispatch(setSelectedQuestion(questionWithZip));
  //   router.push(`/${zipCode}`);
  // };
  return (
    <section className="relative h-[70vh] bg-bluish w-full pt-[70px] pb-[80px] flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-wrap">
          <div className="w-full lg:w-full">
            <div className=" flex justify-center  gap-4">
              <h2 className="fz55 text-[30px] font-bold ">
                {" "}
                Show Me The Plans & Prices For Each Provider{" "}
              </h2>
              <div>
                <div className="rightSection">
                  <div className="inputSection">
                    <Searchbtn text="Submit" />
                  </div>
                </div>
                {/* weather */}
                {/* Weather details */}
                {weatherState.status === "loading" && (
                  <p className="text-white mt-4">Loading weather data...</p>
                )}
                {weatherState.status === "failed" && (
                  <p className="text-white mt-4">
                    Error:{" "}
                    {weatherState.error || "Failed to fetch weather data"}
                  </p>
                )}
                {weatherState.status === "succeeded" && weatherState.data ? (
                  weatherState.data.forecast?.forecastday?.length > 0 ? (
                    <div className="mt-4 text-white flex gap-2.5">
                      {weatherState.data.forecast.forecastday.map(
                        (day, index) => (
                          <div key={day.date_epoch || index} className="flex">
                            <div className="flex flex-col items-center text-center">
                              {/* Date at the top */}
                              <h3 className=" mb-1">
                                {day.date.split("-").slice(1).join("-")}
                              </h3>
                              {/* Weather icon below date */}
                              {day.day.condition.icon && (
                                <Image
                                  src={`https:${day.day.condition.icon}`}
                                  alt={day.day.condition.text}
                                  width={48}
                                  height={48}
                                  className="mb-1"
                                />
                              )}
                              {/* Condition text below icon */}
                              <p className="text-sm mb-1 text-white">
                                {day.day.condition.text}
                              </p>
                              {/* Max and min temperatures below condition */}
                              <p className="text-sm text-white">
                                {day.day.maxtemp_f}°F : {day.day.mintemp_f}°F
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <p className="text-white mt-4">
                      No forecast data available
                    </p>
                  )
                ) : (
                  weatherState.status === "succeeded" && (
                    <p className="text-white mt-4">No weather data available</p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 py-10 px-10">
        <h1 className="text-[30px] font-bold text-primary m-0">Moving ?</h1>
        <input
          type="text"
          placeholder="Zip Code"
          className="py-[10px] px-[20px] rounded-lg outline-none border-none  bg-primary placeholder:text-navtext text-navtext"
        />
      </div>
    </section>
  );
}
