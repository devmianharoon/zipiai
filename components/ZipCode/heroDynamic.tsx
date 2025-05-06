"use client";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import Searchbtn from "../buttonComp/Searchbtn";
import { useEffect } from "react";
import { fetchWeather } from "../../store/slices/weatherSlice";
import Image from "next/image";
import Moving from "../home/Moving";

export default function HeroDynamic({zipCode}: { zipCode: string }) {
  const dispatch = useDispatch<AppDispatch>();

  // const router = useRouter();
  // const { zipCode } = useSelector((state: RootState) => state.location);
  useEffect(() => {
    if (zipCode) {
      dispatch(fetchWeather(zipCode));
    }
  }, [zipCode]);
  const weatherState = useSelector((state: RootState) => state.weather);
  
  return (
    <section className="relative h-[400px] bg-bluish w-full  flex justify-center p-4">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-wrap">
          <div className="w-full lg:w-full">
            {/* Weather details */}
            {weatherState.status === "loading" && (
              <p className="text-white mt-4">Loading weather data...</p>
            )}
            {weatherState.status === "failed" && (
              <p className="text-white mt-4">
                Error: {weatherState.error || "Failed to fetch weather data"}
              </p>
            )}
            {weatherState.status === "succeeded" && weatherState.data ? (
              weatherState.data.forecast?.forecastday?.length > 0 ? (
                <div className=" text-white flex flex-col gap-1  w-[150px]">
                  {weatherState.data.forecast.forecastday.map((day, index) => (
                    <div
                      key={day.date_epoch || index}
                      className="flex border-b w-[150px] gap-3">
                      <div className="flex w-auto justify-between items-center text-center">
                        {/* Date at the top */}
                        <h3 className=" mb-1">
                          {new Date(day.date).toLocaleDateString("en-US", {
                            weekday: "short",
                          })}
                        </h3>
                        {/* Weather icon below date */}
                        {day.day.condition.icon && (
                          <Image
                            src={`https:${day.day.condition.icon}`}
                            alt={day.day.condition.text}
                            width={40}
                            height={40}
                            className="mb-1"
                          />
                        )}

                        {/* Max and min temperatures below condition */}
                        <p className="text-sm text-white">
                          {day.day.maxtemp_f}° {day.day.mintemp_f}°
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-white mt-4">No forecast data available</p>
              )
            ) : (
              weatherState.status === "succeeded" && (
                <p className="text-white mt-4">No weather data available</p>
              )
            )}
            <div className=" flex  gap-12 justify-center items-center">
              <h2 className="fz55 text-[30px] font-bold text-white ">
                Show Me Other Providers
              </h2>
              <div className="rightSection">
                <div className="flex justify-center">
                  <Searchbtn text="Submit" wclass="w-46" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Moving/>
    </section>
  );
}

// weatherState.data.forecast?.forecastday?.length > 0 ? (
//   <div className=" text-white flex flex-col gap-2.5 mb-6 ">
//     {weatherState.data.forecast.forecastday.map((day, index) => (
//       <div key={day.date_epoch || index} className="flex ">
//         <div className="flex justify-between border-b  items-center text-center w-[220px]">
//           {/* Date at the top */}
//           <h3 className=" mb-1">
//             {day.date.split("-").slice(1).join("-")}
//           </h3>
//           {/* Weather icon below date */}
//           {day.day.condition.icon && (
//             <Image
//               src={`https:${day.day.condition.icon}`}
//               alt={day.day.condition.text}
//               width={48}
//               height={48}
//               className="mb-1"
//             />
//           )}
//           {/* Condition text below icon */}
//           {/* <p className="text-sm mb-1 text-white">
//             {day.day.condition.text}
//           </p> */}
//           {/* Max and min temperatures below condition */}
//           <p className="text-sm text-white">
//             {day.day.maxtemp_f}°F : {day.day.mintemp_f}°F
//           </p>
//         </div>
//       </div>
//     ))}
