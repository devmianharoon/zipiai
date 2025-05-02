
const internetTypes = [
    {
        name: "Satellite",
        connection_type: "Satellite communication",
        speed: "25–250 Mbps",
        latency: "500–700 ms (traditional), 20–50 ms (Starlink)",
        availability: "Virtually everywhere",
        reliability: "Weather-dependent; can be spotty",
        cost: "High",
        best_for: [
          "Remote areas",
          "Basic browsing",
          "Email"
        ]
      },
      {
        name: "Fiber",
        connection_type: "Fiber-optic cables",
        speed: "100 Mbps – 10 Gbps",
        latency: "1–15 ms (very low)",
        availability: "Growing, mostly in urban areas",
        reliability: "Excellent; not affected by weather or distance",
        cost: "Moderate to high",
        best_for: [
          "Power users",
          "Remote work",
          "4K/8K streaming",
          "Online gaming",
          "Video conferencing"
        ]
      },
  {
    name: "DSL",
    connection_type: "Telephone lines",
    speed: "5–100 Mbps",
    latency: "20–50 ms (moderate)",
    availability: "Wide, especially in rural/suburban areas",
    reliability: "Generally stable, may degrade with distance",
    cost: "Low to moderate",
    best_for: [
      "Web browsing",
      "Emails",
      "SD/HD streaming",
      "Light usage households"
    ]
  },
  {
    name: "Cable",
    connection_type: "Coaxial TV cables",
    speed: "100–1,000 Mbps",
    latency: "15–35 ms (low to moderate)",
    availability: "Wide in urban/suburban areas",
    reliability: "Good, but can slow during peak hours",
    cost: "Moderate",
    best_for: [
      "HD/4K streaming",
      "Gaming",
      "Remote work",
      "Multi-user households"
    ]
  }
  
];

const InternetComparisonSimple = () => {
  return (
    <>

    <div className="max-w-4xl mx-auto p-4 space-y-8 ">
    <h1 className="text-3xl font-bold mb-6 text-center">Internet Types Comparison</h1>

      {internetTypes.map((type, index) => (
        <div key={index} className="border-b pb-6">
          <h2 className="text-2xl font-bold">
             {index + 1}. {type.name}
          </h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Connection Type</strong>: {type.connection_type}</li>
            <li><strong>Speed</strong>: {type.speed}</li>
            <li><strong>Latency</strong>: {type.latency}</li>
            <li><strong>Availability</strong>: {type.availability}</li>
            <li><strong>Reliability</strong>: {type.reliability}</li>
            <li><strong>Cost</strong>: {type.cost}</li>
          </ul>
          <p className="mt-3"><strong>Best for</strong>: {type.best_for.join(", ")}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default InternetComparisonSimple;
