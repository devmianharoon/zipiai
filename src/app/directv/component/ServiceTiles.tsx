import Image from "next/image";
export default function ServiceTiles() {
  return (
    <div className="">
      {/* Gemini Air Section */}
      <div className="mt-12 bg-blue-500 rounded-lg overflow-hidden text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Gemini Air Device"
              width={400}
              height={300}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-medium mb-2">GEMINI AIR</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pick the better way to watch it all
            </h2>
            <p className="mb-6">
              Stream all your content from your favorite apps in one place – no
              satellite needed.*
            </p>
            <div className="mb-6">
              <a href="#" className="text-white underline text-lg">
                Have Your Own Device?
              </a>
            </div>
            <button className="bg-white text-blue-500 hover:bg-white/90 py-2 px-4 rounded-md font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
