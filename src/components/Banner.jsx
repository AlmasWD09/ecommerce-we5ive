import CommonButton from "./shared/CommonButton"
import { TbTruckDelivery } from "react-icons/tb";
import { TbExchange } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import Image from "next/image";

const Banner = () => {
  return (
<>
 {/* Banner Section */}
 <header className="relative bg-cover bg-center py-44  ">
 <Image
    src="/images/banner/hero.png"
    alt="Banner Image"
    layout="fill"
    objectFit="cover"
    priority 
  />
        <div className="absolute inset-0 "></div>
        <div className="relative  flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Elevate Your Everyday Style
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover the Latest Trends in Sustainable Fashion
          </p>
         <CommonButton text={"Shop Now"}/>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-primary text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="p-4  flex gap-1">
            <TbTruckDelivery className="text-3xl"/>
            <div className="">
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="">
              Buy over $50 and get free delivery.
            </p>
            </div>
          </div>
          <div className="p-4  flex gap-1">
            <TbExchange className="text-3xl"/>
            <div className="">
            <h3 className="text-xl font-semibold mb-2">7 Days Exchange</h3>
            <p className="">
            Exchange within 7 days for similar items.
            </p>
            </div>
          </div>

          <div className="p-4  flex gap-1">
            <MdPayments className="text-3xl"/>
            <div className="">
            <h3 className="text-xl font-semibold mb-2">100% Secure Payment</h3>
            <p className="">
            Safe and secure online payments.
            </p>
            </div>
          </div>
        </div>
      </section>
</>
  )
}

export default Banner