"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "../../store/store";
import { capitalizeWords } from "../../data/HelperFunction";

interface ZipBreadcrumbProps {
  zipCode: string;
}

export default function ZipBreadcrumb({ zipCode }: ZipBreadcrumbProps) {
  console.log("Zip code from props:", zipCode);
  const { data, loading, error } = useSelector((state: RootState) => state.zip);
  console.log("Zip data from Redux:", data);

  if (loading) {
    return <div className="text-gray-500 text-center py-4">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-4 bg-white">
        Error: {error}
      </div>
    );
  }

  if (!data) {
    return <div className="text-gray-500 text-center py-4">Loading...</div>;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-4 px-6   flex justify-center   backdrop-blur-[22.5px] bg-[rgba(3,10,19,0.05)]"
      style={{
           boxShadow: "0px -1px 0px 0px rgba(255, 255, 255, 0.10)",

      }}
    >
      <ol className="flex items-center ">
        <p className="text-[var(--color-black)]  flex items-center flex-col lg:flex-row gap-0.5">
          <span className="text-[var(--color-black)]">Results for</span>
          <br className="lg:block" />
          <p className="text-[var(--color-black)] flex">
            <div>
              <Link href={`/state/${data.state_abbr}`} className="">
                {capitalizeWords(data.state)}
              </Link>

              <span className=" mx-2">/</span>

              <Link
                href={`/city/${encodeURIComponent(data.city)}`}
                className=""
              >
                {capitalizeWords(data.city)}
              </Link>

              <span className=" mx-2">/</span>

              {data.zip}
            </div>
          </p>
        </p>
      </ol>
    </nav>
  );
}
