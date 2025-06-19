"use client";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../../store/slices/weatherSlice";
import { Globe } from "lucide-react";
import Image from "next/image";
import MovingH from "../home/movingH";

export default function HeroDynamic({ zipCode }: { zipCode: string }) {
  const dispatch = useDispatch<AppDispatch>();
  // const zip = useSelector((state: RootState) => state.zip.data);
  useEffect(() => {
    if (zipCode) {
      dispatch(fetchWeather(zipCode));
    }
  }, [zipCode]);

  const weatherState = useSelector((state: RootState) => state.weather);
  console.log("Weather State:", weatherState);

  return (
    <section className="relative  bg-bluish w-full flex justify-center p-4 bg-[var(--color-bg-primary)] h-[785px] md:h-auto">
      <div className="container mx-auto ">
        {/* Heading Section */}
        <div className=" flex  justify-center items-center">
          <div className="w-[600px] text-center lg:mt-36 flex flex-col gap-8 mt-0 px-[15px] lg:mb-[120px] ">
            <h1 className="text-[var(--color-black)] md:font-[var(--font-sf)] lg:font-bold text-[38px] leading-[48px]  font-semibold">
              Compare and Choose the Top Internet Providers Near You  
            </h1>
            <div className="w-full flex justify-center items-center gap-2">
              <button
                className="bg-[var(--color-red)] text-white rounded-full py-[16px] px-[28px] flex items-center cursor-pointer "
                onClick={() => {
                  const section = document.getElementById("more-providers");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Globe className="w-5 h-5 mr-2" />
                Show Me More Providers
              </button>
            </div>
          </div>
        </div>
        {/* Weather Section */}
        <div className="lg:w-[220px]  lg:h-[219px] lg:absolute lg:top-[39px] lg:right-6  mt-[30px] lg:mt-0">
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
              {/* Forecast data */}

              <div className="overflow-x-auto bg-[var(--color-white)] rounded-xl">
                <div className=" backdrop-blur-sm rounded-xl p-5 my-8 lg:my-0 ">
                  <h2 className="text-[var(--color-black)] text-base font-semibold mb-1">
                    {weatherState.data.location?.name},{" "}
                    {weatherState.data.location?.region}
                  </h2>
                  {weatherState.data.forecast.forecastday.map((day, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between ${
                        index !== 2 ? "border-b border-black/20 py-0.5" : ""
                      }`}
                    >
                      <span className="font-medium text-[14px] text-[var(--color-black)]">
                        {new Date(day.date).toLocaleDateString("en-US", {
                          weekday: "short",
                        })}
                      </span>
                      {day.day.condition.icon && (
                        <Image
                          src={`https:${day.day.condition.icon}`}
                          alt={day.day.condition.text}
                          width={30}
                          height={30}
                        />
                      )}
                      <span className="font-medium text-[14px] text-[var(--color-black)]">
                        <span>{day.day.maxtemp_f}°</span> |{" "}
                        <span>{day.day.mintemp_f}°</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            weatherState.status === "succeeded" && (
              <p className="text-[var(--color-black)] mt-4">
                No weather data available
              </p>
            )
          )}

          {/* Static Section Below */}
        </div>
        <div className="lg:absolute w-full lg:top-[30px] lg:left-4 mt-[30px] lg:mt-0">
          <MovingH theme="light" />
        </div>
      </div>
      <div className="hidden md:block  md:h-[220px] h-[190px] w-full absolute bottom-0 left-0">
                  <Image
                    src={"/assets/images/Bg.png"}
                    alt={"dd"}
                    fill
                    objectFit="cover"
                    className="opacity-[.4]"
                  />
                </div>
    </section>
  );
}
