"use client";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../../store/slices/weatherSlice";
import Moving from "../home/Moving";
import { Globe, Cloud, Sun, CloudSun } from "lucide-react";

export default function HeroDynamic({ zipCode }: { zipCode: string }) {
  const dispatch = useDispatch<AppDispatch>();
  const zip = useSelector((state: RootState) => state.zip.data);
  useEffect(() => {
    if (zipCode) {
      dispatch(fetchWeather(zipCode));
    }
  }, [zipCode]);
//console for error
  console.log(zip);

  const weatherState = useSelector((state: RootState) => state.weather);
  console.log("Weather State:", weatherState);

  return (
    <section className="relative h-[500px] bg-bluish w-full flex justify-center p-4 bg-gradient-to-b from-[#FF4D4D] to-[#992E2E]">
      <div className="container mx-auto px-4">
        <div className=" flex  justify-center items-center">
          <div className="w-[600px] text-center mt-36 flex flex-col gap-8">
            <h1 className="text-white ">
              Explore the best internet connections below
            </h1>
            <div className="w-full flex justify-center items-center">
              <button className="bg-black text-white rounded-full py-3 px-8 flex items-center cursor-pointer">
                <Globe className="w-5 h-5 mr-2" />
                Show me other providers
              </button>
            </div>
          </div>

          <div className="w-[306px]  h-[219px] absolute top-6 right-6">
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
                {/* <h2 className="text-white text-xl font-semibold mb-3">
                  {weatherState.data.location?.name},{" "}
                  {weatherState.data.location?.region}
                </h2> */}

                {/* Forecast data */}
                {weatherState.data.forecast?.forecastday?.length > 0 ? (
                  <div className="overflow-x-auto">
                    {/* <table className="w-auto border-collapse text-white">
              
                      <tbody>
                        {weatherState.data.forecast.forecastday.map(
                          (day, index) => (
                            <tr
                              key={day.date_epoch || index}
                              className={`${
                                index < 2 ? "border-b  border-gray-300" : ""
                              }`}
                            >
                              <td className="py-1 px-2 text-center">
                                {new Date(day.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    weekday: "short",
                                  }
                                )}
                              </td>

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

                              <td className="py-1 px-2 text-center text-sm">
                                <span>{day.day.maxtemp_f}°</span> |{" "}
                                <span>{day.day.mintemp_f}°</span>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table> */}
                    <div className="bg-red-400/30 backdrop-blur-sm rounded-xl p-5 mb-8">
                      <h2 className="text-white text-xl font-semibold mb-3">
                        {weatherState.data.location?.name},{" "}
                        {weatherState.data.location?.region}
                      </h2>

                      <div className="border-b border-white/20 py-3 flex items-center justify-between">
                        <span className="font-medium">Thu</span>
                        <Cloud className="w-6 h-6 text-white" />
                        <span className="font-medium">76.3° | 76.3°</span>
                      </div>

                      <div className="border-b border-white/20 py-3 flex items-center justify-between">
                        <span className="font-medium">Fri</span>
                        <Sun className="w-6 h-6 text-yellow-300" />
                        <span className="font-medium">48.7° | 71.4°</span>
                      </div>

                      <div className="py-3 flex items-center justify-between">
                        <span className="font-medium">Sat</span>
                        <CloudSun className="w-6 h-6 text-white" />
                        <span className="font-medium">47.8° | 72.9°</span>
                      </div>
                    </div>
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
          </div>
        </div>
      </div>
      <div className="absolute w-full top-36 left-4">
        <Moving
          bgClass="bg-[var(--color-black)]"
          bgClassBtn="bg-[var(--color-red)]"
        />
      </div>
    </section>
  );
}
