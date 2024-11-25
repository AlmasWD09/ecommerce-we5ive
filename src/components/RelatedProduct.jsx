"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const RelatedProduct = () => {
    const [products, setProducts] = useState([]);

    // Data load
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/featuredProduct.json");
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error loading data:", error);
        }
      };
      fetchData();
    }, []);
  return (
    <section className="container mx-auto px-4 py-8">
    <div className="flex justify-between ">
    <h2 className="font-semibold">Related Products</h2>

    <div className="flex gap-2">
        <span className="border border-primary rounded-full flex justify-center items-center h-8 w-8"><BsArrowLeft /></span>
        <span className="border border-primary rounded-full flex justify-center items-center h-8 w-8"><BsArrowRight /></span>
    </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition duration-300"
        >
          <div className="relative h-[220px] text-center">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="max-h-[200px] w-full bg-primaryGray/50 object-contain bg-center rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="mt-4">
           <div className="flex justify-between">
           <h5 className="font-semibold ">{product.name}</h5>
           <h4 className="text-lg font-semibold">BDT {product.price}</h4>
           </div>
          </div>
          <div className="mt-4">
            <button className="w-full py-2 border border-primary hover:text-white font-semibold rounded hover:bg-primary transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-8">
      <button className="px-6 py-2 bg-primary/90 text-white rounded hover:bg-primary transition duration-300">
        See More
      </button>
    </div>
  </section>
  )
}

export default RelatedProduct