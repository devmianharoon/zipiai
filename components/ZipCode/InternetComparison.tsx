
// type InternetType = {
//   rank: number;
//   name: string;
//   speed: {
//     download: string;
//     upload: string;
//   };
//   description: string;
//   best_for: string[];
//   note?: string;
//   notes?: string[];
// };

// const internetTypesRanked:InternetType[] = [
 
//     {
//       rank: 1,
//       name: "Fiber Internet",
//       speed: {
//         download: "300–5,000 Mbps",
//         upload: "300–5,000 Mbps"
//       },
//       description: "Uses ultra-fast fiber-optic cables for symmetrical speeds (equal up & down).",
//       best_for: [
//         "Online gaming",
//         "4K/8K streaming",
//         "Work-from-home/video conferencing",
//         "Uploading large files (like videos or cloud backups)"
//       ],
//       note: "Top choice if available in your area."
//     },
//     {
//       rank: 2,
//       name: "Cable Internet",
//       speed: {
//         download: "100–1,200 Mbps",
//         upload: "10–35 Mbps"
//       },
//       description: "Delivered through TV cable lines.",
//       best_for: [
//         "HD/4K streaming",
//         "Multi-user households",
//         "Video conferencing"
//       ],
//       notes: [
//         "Great download speeds, but upload speeds are limited.",
//         "Widely available in cities and suburbs."
//       ]
//     },
//     {
//       rank: 3,
//       name: "DSL (Digital Subscriber Line)",
//       speed: {
//         download: "10–100 Mbps",
//         upload: "1–10 Mbps"
//       },
//       description: "Runs over telephone lines.",
//       best_for: [
//         "Basic browsing",
//         "Email & social media"
//       ],
//       note: "Slower than cable and fiber, but more stable than satellite."
//     },
//     {
//       rank: 4,
//       name: "Satellite Internet",
//       speed: {
//         download: "25–250 Mbps",
//         upload: "3–20 Mbps"
//       },
//       description: "Connects via satellite signals, requiring a clear view of the sky.",
//       best_for: [
//         "Rural or remote areas with no wired internet options"
//       ],
//       notes: [
//         "Higher latency affects gaming and video calls.",
//         "Should be used only when there are no wired alternatives."
//       ]
//     }
//   ]
// };


// const InternetComparisonSimple = () => {
//   return (
//     <>

//     <div className="max-w-4xl mx-auto p-4 space-y-8 ">
//     <h1 className="text-3xl font-bold mb-6 text-center">Internet Types Comparison</h1>

//       {internetTypesRanked.map((type, index) => (
//         <div key={index} className="border-b pb-6">
//           <h2 className="text-2xl font-bold">
//              {index + 1}. {type.name}
//           </h2>
//           <ul className="list-disc pl-5 mt-2 space-y-1">
//             <li><strong>Connection Type</strong>: {type.connection_type}</li>
//             <li><strong>Speed</strong>: {type.speed}</li>
//             <li><strong>Latency</strong>: {type.latency}</li>
//             <li><strong>Availability</strong>: {type.availability}</li>
//             <li><strong>Reliability</strong>: {type.reliability}</li>
//             <li><strong>Cost</strong>: {type.cost}</li>
//           </ul>
//           <p className="mt-3"><strong>Best for</strong>: {type.best_for.join(", ")}</p>
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default InternetComparisonSimple;
'use client';

import React from 'react';

type InternetType = {
  rank: number;
  name: string;
  speed: {
    download: string;
    upload: string;
  };
  description: string;
  best_for: string[];
  note?: string;
  notes?: string[];
};

const internetTypesRanked: {
  title: string;
  ranked_types: InternetType[];
} = {
  title: 'Internet Types Ranked: Satellite vs Fiber vs Cable vs DSL',
  ranked_types: [
    {
      rank: 1,
      name: 'Fiber Internet',
      speed: {
        download: '300–5,000 Mbps',
        upload: '300–5,000 Mbps'
      },
      description: 'Uses ultra-fast fiber-optic cables for symmetrical speeds (equal up & down).',
      best_for: [
        'Online gaming',
        '4K/8K streaming',
        'Work-from-home/video conferencing',
        'Uploading large files (like videos or cloud backups)'
      ],
      note: 'Top choice if available in your area.'
    },
    {
      rank: 2,
      name: 'Cable Internet',
      speed: {
        download: '100–1,200 Mbps',
        upload: '10–35 Mbps'
      },
      description: 'Delivered through TV cable lines.',
      best_for: [
        'HD/4K streaming',
        'Multi-user households',
        'Video conferencing'
      ],
      notes: [
        'Great download speeds, but upload speeds are limited.',
        'Widely available in cities and suburbs.'
      ]
    },
    {
      rank: 3,
      name: 'DSL (Digital Subscriber Line)',
      speed: {
        download: '10–100 Mbps',
        upload: '1–10 Mbps'
      },
      description: 'Runs over telephone lines.',
      best_for: ['Basic browsing', 'Email & social media'],
      note: 'Slower than cable and fiber, but more stable than satellite.'
    },
    {
      rank: 4,
      name: 'Satellite Internet',
      speed: {
        download: '25–250 Mbps',
        upload: '3–20 Mbps'
      },
      description:
        'Connects via satellite signals, requiring a clear view of the sky.',
      best_for: ['Rural or remote areas with no wired internet options'],
      notes: [
        'Higher latency affects gaming and video calls.',
        'Should be used only when there are no wired alternatives.'
      ]
    }
  ]
};

const InternetTypes = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4"> {internetTypesRanked.title}</h2>
      {internetTypesRanked.ranked_types.map((type) => (
        <div key={type.rank} className="mb-6 border-b pb-4">
          <h3 className="text-lg font-semibold text-black flex items-center mb-1">
             {type.name}
          </h3>
          <p className="text-sm">
            <span className="font-bold">Speed:</span> ⚡ Download: {type.speed.download} | Upload: {type.speed.upload}
          </p>
          <p className="text-sm mb-2">{type.description}</p>
          <p className="font-bold text-sm">Best for:</p>
          <ul className="list-disc list-inside mb-2 text-sm">
            {type.best_for.map((use, i) => (
              <li key={i}>{use}</li>
            ))}
          </ul>
          {type.note && (
            <p className="text-sm text-black font-medium">{type.note}</p>
          )}
          {type.notes && (
            <ul className="list-disc list-inside text-sm text-gray-600">
              {type.notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default InternetTypes;
