import Image from "next/image";

const ReviewCard = ({ name, date, rating, comment, likes,img }) => {
    return (
      <div className="p-4 border-b">
     <div className="flex gap-2">
        <div>
            <Image src={"/images/review/review01.png"} alt="review" width={100} height={100} className="w-10 h-10 rounded-full object-cover"/>
        </div>
        <div>
        <div className="flex  items-center">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill={i < rating ? "gold" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
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
        <p className="text-gray-700 mt-2">{comment}</p>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <span className="mr-2">👍 {likes}</span>
        </div>
        </div>
     </div>
      </div>
    );
  };
  
  export default ReviewCard;
  