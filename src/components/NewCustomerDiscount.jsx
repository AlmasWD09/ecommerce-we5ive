import Image from "next/image"
import CommonButton from "./shared/CommonButton"


const NewCustomerDiscount = () => {
    return (
        <section className="container mx-auto px-4 mt-10">
            <div className="bg-primaryGray/50 flex flex-col lg:flex-row justify-between items-center gap-4 px-10 py-3 lg:py-0">
                <div className="w-full lg:w-[60%] space-y-4">
                    <h4 className="font-Pacifico">Big Deal</h4>
                    <h2 className="text-5xl font-semibold">30% Off for New Customers</h2>
                    <CommonButton text={"Shop Now"} />
                </div>
                <div className="w-full lg:w-[40%] flex justify-center items-center ">
                    <Image src={"/images/discount/discount1.png"} alt="product" width={400} height={100} />
                </div>
            </div>

            {/* right side image */}
            <div className="flex flex-col md:flex-row gap-6 items-center my-20">
                <div>
                    <Image className="bg-primaryGray/50 px-8 rounded-md" src={"/images/discount/photo01.png"} alt="product" width={400} height={100} />
                </div>
                <div>
                    <h2 className="font-semibold">MEN COLLECTION</h2>
                    <CommonButton text={"Shop Now"} />
                </div>
            </div>
        </section>
    )
}

export default NewCustomerDiscount