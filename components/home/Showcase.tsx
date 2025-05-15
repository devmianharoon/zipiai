"use client";

import Image from "next/image";

import React from "react";

const products = [
  {
    id: 1,
    image: "/assets/images/1.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet odio nibh, laoreet malesuada elit luctus vel. Nunc rutrum faucibus mi in molestie.",
  },
  {
    id: 2,
    image: "/assets/images/2.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet odio nibh, laoreet malesuada elit luctus vel. Nunc rutrum faucibus mi in molestie.",
  },
  {
    id: 3,
    image: "/assets/images/3.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet odio nibh, laoreet malesuada elit luctus vel. Nunc rutrum faucibus mi in molestie.",
  },
];

const ProductShowcase = () => {
  return (
    <section className="w-full py-8 bg-white flex justify-center items-center ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-6 justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-1 w-[300px]  bg-white rounded-2xl flex flex-col justify-between">
              <div className="w-[400px] h-[300px] relative rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* <div className="p-4">
                <h1 className="text-[24px] font-bold text-gray-900 mb-2 ">
                  {product.title}
                </h1>
                <p className="text-gray-600 text-[16px]">
                  {product.description}
                </p>
                <div className="flex justify-end mt-4">
                  <div className="w-10 h-10 rounded-full bg-redish flex items-center justify-center shadow-md cursor-pointer hover:bg-blue-600 transition">
                    <ArrowRight size={18} color="white" />
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
