import { useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
    const [isOpen, setIsOpen] = useState(false);
    const reviews = [
        { name: "Cameron Williamson", date: "3 days ago", rating: 4, comment: "Very Nice!!", likes: 10 },
        { name: "Cameron Williamson", date: "7 days ago", rating: 8, comment: "Awesome!!", likes: 17 },
    ];

    const summary = { average: 4.0, total: 121, breakdown: [50, 5, 10, 30, 2] };

    return (
        <>
            <div className="bg-white shadow rounded-lg mt-20">
                <div className="flex items-center px-4 lg:px-8 pt-4 gap-4">
                    <button>Details</button>
                    <button className="font-semibold text-primary">Review & Rating</button>
                    <button>Discussion</button>
                </div>
                <div className="pt-4 px-4 lg:px-8">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border rounded-md"
                >
                    <span className="mx-1 font-semibold">Newwest</span>
                    <svg
                        className="w-5 h-5 mx-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
                </div>
                <div className=" flex flex-col lg:flex-row justify-center lg:justify-between p-4 ">
                    <div className="order-2 lg:order-1">
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </div>
                    {/* right side */}
                    <div className="order-1 lg:order-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Product Review</h2>
                            <p className="text-gray-500">{summary.total} reviews</p>
                        </div>
                        <div className="flex items-center mt-4">
                            <span className="text-4xl font-bold">{summary.average}</span>
                            <div className="ml-4">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={i < Math.round(summary.average) ? "gold" : "none"}
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className={`h-6 w-6 ${i < Math.round(summary.average) ? "text-yellow-400" : "text-gray-300"}`}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.7 5.241a1 1 0 00.95.69h5.482c.969 0 1.371 1.24.588 1.81l-4.38 3.18a1 1 0 00-.363 1.118l1.7 5.241c.3.921-.755 1.688-1.538 1.118l-4.38-3.18a1 1 0 00-1.176 0l-4.38 3.18c-.783.57-1.838-.197-1.538-1.118l1.7-5.241a1 1 0 00-.363-1.118l-4.38-3.18c-.783-.57-.381-1.81.588-1.81h5.482a1 1 0 00.95-.69l1.7-5.241z"
                                            />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500">{summary.total} total</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h3 className="font-semibold text-gray-800">Rating Breakdown</h3>
                            <div className="mt-2">
                                {summary.breakdown.map((count, i) => (
                                    <div key={i} className="flex items-center">
                                        <span className="w-10 text-sm font-medium">{5 - i} ★</span>
                                        <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                                            <div
                                                className="bg-yellow-400 h-2 rounded-full"
                                                style={{ width: `${(count / summary.total) * 100}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm text-gray-500">{count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;
