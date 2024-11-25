'use client';
import RelatedProduct from '@/components/RelatedProduct';
import Reviews from '@/components/Reviews';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { use } from 'react';

const ProductDetails = ({ params }) => {
    const { id } = use(params);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch('/summerProduct.json');
                const data = await response.json();

                const product = data.find((item) => item.id === parseInt(id));
                if (product) {
                    setProduct(product);
                } else {
                    setError('Product not found');
                }
            } catch (err) {
                setError('Failed to load product data');
            }
        };

        fetchProductData();
    }, [id]);

    if (error) {
        return <div className="p-4">{error}</div>;
    }

    if (!product) {
        return <div className="p-4">Loading...</div>;
    }

    return (
        <section className="container mx-auto px-4">
            <h4 className='py-4'>Feature Product / <span className='text-primary'>New Arrival</span></h4>
            <div >
                <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                    {/* Product Images */}
                    <div>
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            width={200}
                            height={200}
                            layout="responsive"
                            className="rounded-lg shadow-md bg-primaryGray/50 max-w-[650px] max-h-[550px] object-center object-contain "
                        />
                        <div className=" hidden lg:flex justify-center gap-4 mt-4">
                            {product.images.map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={img}
                                    alt={`Image ${idx + 1}`}
                                    width={100}
                                    height={100}

                                    className="rounded-lg cursor-pointer bg-primaryGray/50 px-2"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div>
                        <h2 className="text-2xl font-bold">{product.name}</h2>
                        <div className="flex items-center mt-2">
                            <div className="flex items-center space-x-1 text-yellow-500">
                                {[...Array(Math.round(product.rating))].map((_, i) => (
                                    <span key={i}>&#9733;</span>
                                ))}
                                <span className="text-black">({product.rating})</span>
                                <span className='text-primary pl-4'>{product.reviews} reviews</span>
                            </div>
                        </div>
                        <p className="text-lg text-gray-600">BDT {product.price}</p>
                        <div className='flex flex-col lg:flex-row justify-between'>
                            {/* Sizes */}
                            <div className="mt-4">
                                <p className="font-semibold">Available Size:</p>
                                <div className="flex gap-2 mt-2">
                                    {product.availableSizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`border rounded-md px-4 py-2 ${selectedSize === size
                                                    ? "bg-primary text-white"
                                                    : "border border-primary"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Colors */}
                            <div className="mt-4">
                                <p className="font-semibold">Available Color:</p>
                                <div className="flex gap-2 mt-2">
                                    {product.availableColors.map((color, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedColor(color)}
                                            className={`border rounded px-4 py-2 ${selectedColor === color
                                                    ? "bg-primary text-white"
                                                    : "bg-primaryGray/50"
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div>
                            <p className='font-semibold mt-4'>Quantity</p>
                            <div className="max-w-32 bg-primaryGray/50 flex items-center gap-4 mt-2 border rounded-full">
                                <button
                                    onClick={() =>
                                        setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                                    }
                                    className="px-4 py-2  rounded"
                                >
                                    -
                                </button>
                                <span>{quantity}</span>
                                <button
                                    onClick={() => setQuantity((prev) => prev + 1)}
                                    className="px-4 py-2  rounded"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex gap-4">
                            <button className="bg-primary text-white px-6 py-2 rounded">
                                Buy Now
                            </button>
                            <button className="border border-purple-500 px-6 py-2 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* related product component here.. */}
            <Reviews />
            <RelatedProduct />
        </section>
    );
};

export default ProductDetails;
