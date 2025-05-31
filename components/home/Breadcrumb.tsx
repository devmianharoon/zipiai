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
    <nav aria-label="Breadcrumb" className="py-4 px-6   flex justify-center bg-[#992E2E] border-t-1 border-gray-200">
      <ol className="flex items-center ">
        <p className='text-white  flex items-center'>
        <p className='text-white'>Showing below the results for: </p>{" "}
        <br  className='lg:block'/>
        <li>
          <Link
            href={`/state/${data.state_abbr}`}
            className=""
          >
            {data.state}
          </Link>
        </li>
        <li>
          <span className=" mx-2">/</span>
        </li>
        
        <li>
          <Link
            href={`/city/${encodeURIComponent(data.city)}`}
            className=""
          >
            {data.city}
          </Link>
        </li>
        <li>
          <span className=" mx-2">/</span>
        </li>
        <li className="" aria-current="page">
          {data.zip}
        </li>
        </p>
      </ol>
    </nav>
  );
}