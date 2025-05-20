"use client";
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { RootState } from '../../store/store';

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
    return <div className="text-red-500 text-center py-4 bg-white">Error: {error}</div>;
  }

  if (!data) {
    return <div className="text-gray-500 text-center py-4">Loading...</div>;
  }

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-6  rounded-lg ">
      <ol className="flex items-center space-x-2 text-sm text-gray-700">
        <li>
          <Link
            href={`/state/${data.state_abbr}`}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            {data.state}
          </Link>
        </li>
        <li>
          <span className="text-gray-400 mx-2">/</span>
        </li>
        {/* <li>
          <Link
            href={`/county/${encodeURIComponent(data.county)}`}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            {data.county}
          </Link>
        </li>
        <li>
          <span className="text-gray-400 mx-2">/</span>
        </li> */}
        <li>
          <Link
            href={`/city/${encodeURIComponent(data.city)}`}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            {data.city}
          </Link>
        </li>
        <li>
          <span className="text-gray-400 mx-2">/</span>
        </li>
        <li className="text-gray-900 font-medium" aria-current="page">
          {data.zip}
        </li>
      </ol>
    </nav>
  );
}