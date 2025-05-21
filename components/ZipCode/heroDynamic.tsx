"use client";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import Searchbtn from "../buttonComp/Searchbtn";
import { useEffect } from "react";
import { fetchWeather } from "../../store/slices/weatherSlice";
import Image from "next/image";
import Moving from "../home/Moving";

export default function HeroDynamic({ zipCode }: { zipCode: string }) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (zipCode) {
      dispatch(fetchWeather(zipCode));
    }
  }, [zipCode]);

  const weatherState = useSelector((state: RootState) => state.weather);
  console.log("Weather State:", weatherState);

  return (
    <section className="relative h-[400px] bg-bluish w-full flex justify-center p-4">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-wrap">
          <div className="w-full lg:w-full">
            {/* Loading and Error states */}
            {weatherState.status === "loading" && (
              <p className="text-white mt-4">Loading weather data...</p>
            )}
            {weatherState.status === "failed" && (
              <p className="text-white mt-4">
                Error: {weatherState.error || "Failed to fetch weather data"}
              </p>
            )}

            {/* Weather display */}
            {weatherState.status === "succeeded" && weatherState.data ? (
              <>
                {/* City, State Heading */}
                <h2 className="text-white text-xl font-semibold mb-3">
                  {weatherState.data.location?.name},{" "}
                  {weatherState.data.location?.region}
                </h2>

                {/* Forecast data */}
                {weatherState.data.forecast?.forecastday?.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-auto border-collapse text-white">
                      {/* <thead>
                      <tr>
                        <th className="py-1 px-2 text-center">Day</th>
                        <th className="py-1 px-2 text-center">Weather</th>
                        <th className="py-1 px-2 text-center">Temp</th>
                      </tr>
                    </thead> */}
                      <tbody>
                        {weatherState.data.forecast.forecastday.map(
                          (day, index) => (
                            <tr
                              key={day.date_epoch || index}
                              className={`${
                                index < 2 ? "border-b  border-gray-300" : ""
                              }`}>
                              {/* Day */}
                              <td className="py-1 px-2 text-center">
                                {new Date(day.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    weekday: "short",
                                  }
                                )}
                              </td>

                              {/* Weather Icon */}
                              <td className="py-1 px-2 text-center flex justify-center">
                                {day.day.condition.icon && (
                                  <Image
                                    src={`https:${day.day.condition.icon}`}
                                    alt={day.day.condition.text}
                                    width={40}
                                    height={40}
                                  />
                                )}
                              </td>

                              {/* Temperature */}
                              <td className="py-1 px-2 text-center text-sm">
                                <span>{day.day.maxtemp_f}°</span> |{" "}
                                <span>{day.day.mintemp_f}°</span>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-white mt-4">No forecast data available</p>
                )}
              </>
            ) : (
              weatherState.status === "succeeded" && (
                <p className="text-white mt-4">No weather data available</p>
              )
            )}

            {/* Static Section Below */}
            <div className="flex gap-12 justify-center items-center mt-6">
              <h2 className="fz55 text-[30px] font-bold text-white">
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
      <Moving />
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
