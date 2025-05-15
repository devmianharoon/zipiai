
export default function NearByCities() {
  const cities = [
    ["Milpitas, CA", "San Jose, CA", "Saratoga, CA", "Stanford, CA"],
    ["Sunnyvale, CA", "Mountain View, CA", "Palo Alto, CA", "Los Gatos, CA"],
    ["Campbell, CA", "Cupertino, CA", "Newark, CA", "Portola Valley, CA"],
    ["Alviso, CA", "Los Altos, CA", "Fremont, CA", "Menlo Park, CA"]
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-blue-50 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cities.map((column, index) => (
            <div key={index} className="flex flex-col space-y-2">
              {column.map((city, cityIndex) => (
                <span key={cityIndex} className="text-blue-600 hover:text-blue-800">
                  {city}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}