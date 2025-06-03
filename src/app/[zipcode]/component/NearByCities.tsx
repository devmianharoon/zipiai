"use client"

interface City {
  name: string
  state: string
  id?: string
}

interface NearbyCitiesProps {
  cities: City[]
//   onCityClick?: (city: City) => void
}

export default function NearbyCities({ cities }: NearbyCitiesProps) {
//   const handleCityClick = (city: City) => {
//     if (onCityClick) {
//       onCityClick(city)
//     }
//   }

  return (
    <div className=" mx-auto bg-white min-h-screen p-[17px] lg:max-w-6xl mb:[60px]  lg:px-[42px]">
      {/* Header */}
      <h2 className=" font-bold text-black text-center mb-[25px] mt-[60px] lg:mb-[40px] lg:mt-[90px] leading-[40px]">
        Internet Providers In Near By Cities
      </h2>

      {/* Cities Grid */}
      <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-5 lg:gap-[16px]">
        {cities.map((city, index) => (
          <button
            key={city.id || `${city.name}-${city.state}-${index}`}
            // onClick={() => handleCityClick(city)}
            className="bg-[rgba(var(--color-red--rgb),0.15)] transition-colors duration-200 rounded-2xl p-6 text-center"
          >
            <span className="text-[14px] lg:text-[14px] font-semibold text-black leading-[24px]" >
              {city.name}, {city.state}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}