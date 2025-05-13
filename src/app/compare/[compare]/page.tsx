"use client";
import { useParams } from "next/navigation";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import Footer from "../../../../components/common/footer/Footer";
import MobileMenu from "../../../../components/common/header/MobileMenu";
import Header from "../../../../components/home/Header";
import Hero from "../../../../components/home/Hero";
import TestSpeed from "../../../../components/home/TestSpeed";
import providersData from "../../../../data/internet_providers.json"; // Adjust the path as necessary

interface Provider {
  id: number;
  name: string;
  connectionType: string;
  downloadSpeeds: string;
  uploadSpeeds: string;
  startingPrice: string;
  dataCaps: string;
  contracts: string;
  availability: string;
  bestFor: string;
  extras: string;
  description: string;
}

export default function Page() {
  const params = useParams(); // Get dynamic route parameters as per Next.js docs
  const compareParam = params.compare as string; // e.g., "Xfinity-vs-CenturyLink"

  // Split the parameter to get the two provider names
  const [provider1Name, provider2Name] = compareParam.split("-vs-");

  // Find providers in the JSON data
  const provider1 = providersData.find(
    (p: Provider) => p.name === provider1Name
  );
  const provider2 = providersData.find(
    (p: Provider) => p.name === provider2Name
  );

  // Handle case where one or both providers are not found
  if (!provider1 || !provider2) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Provider Comparison
        </h2>
        <p className="text-red-600 text-center">
          One or both providers not found.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!-- Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Home Design --> */}
      <Hero />

      {/* <!-- Provider Comparison Section --> */}
      <section className="py-8 bg-gray-100">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            {provider1.name} vs {provider2.name} Internet: Detailed Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-bluish text-white">
                  <th className="py-3 px-6 text-left border-b border-gray-300 font-semibold">
                    Feature
                  </th>
                  <th className="py-3 px-6 text-left border-b border-gray-300 font-semibold">
                    {provider1.name}
                  </th>
                  <th className="py-3 px-6 text-left border-b border-gray-300 font-semibold">
                    {provider2.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-200">
                  <td className="py-3 px-6 border-b border-gray-300">
                    Connection Type
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider1.connectionType}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider2.connectionType}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border-b border-gray-300">
                    Download Speeds
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider1.downloadSpeeds}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider2.downloadSpeeds}
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="py-3 px-6 border-b border-gray-300">
                    Upload Speeds
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider1.uploadSpeeds}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider2.uploadSpeeds}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border-b border-gray-300">
                    Starting Price
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider1.startingPrice}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider2.startingPrice}
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="py-3 px-6 border-b border-gray-300">
                    Data Caps
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider1.dataCaps}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider2.dataCaps}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border-b border-gray-300">
                    Contracts
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider1.contracts}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider2.contracts}
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="py-3 px-6 border-b border-gray-300">
                    Availability
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider1.availability}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider2.availability}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border-b border-gray-300">
                    Best For
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider1.bestFor}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider2.bestFor}
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="py-3 px-6 border-b border-gray-300">Extras</td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider1.extras}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {provider2.extras}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Suggestions */}
          <div className="mt-8 p-4 bg-white">
            <h3 className="text-xl font-bold mb-4">
              Which Internet Provider is Better: {provider1.name} or{" "}
              {provider2.name}?
            </h3>
            <p>
              <span className="font-semibold text-bluish">{provider1.name}</span>:{" "}
              {provider1.description} It offers{" "}
              {provider1.downloadSpeeds.toLowerCase()} download speeds and{" "}
              {provider1.uploadSpeeds.toLowerCase()} upload speeds, with{" "}
              {provider1.dataCaps.toLowerCase()} and{" "}
              {provider1.contracts.toLowerCase()}. Availability may be{" "}
              {provider1.availability.toLowerCase()}.
            </p>
            <p>
              <span className="font-semibold text-bluish">{provider2.name}</span>:{" "}
              {provider2.description} It offers{" "}
              {provider2.downloadSpeeds.toLowerCase()} download speeds and{" "}
              {provider2.uploadSpeeds.toLowerCase()} upload speeds, with{" "}
              {provider2.dataCaps.toLowerCase()} and{" "}
              {provider2.contracts.toLowerCase()}. It is{" "}
              {provider2.availability.toLowerCase()}.
            </p>
            <p className="mt-4 font-semibold">
              <span className="font-bold"> Conclusion: </span>{" "} If you want the best performance and fiber is
              available in your area, go with <span className="text-bluish"> {provider1.name} </span>:{" "}. If coverage or
              price is your priority,
              <span className="font-semibold text-bluish">{provider2.name}</span>:{" "}
              is a dependable and accessible option.
            </p>
          </div>
        </div>
      </section>
      {/* Test Speed */}
      <TestSpeed />
      <section className="footer_one flex justify-center items-center bg-bluish pt-[70px] pb-20">
        <div className="container ">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area flex justify-center items-center bg-bluish py-14">
        <div className="container ">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
}
