import Image from "next/image"
import CommonButton from "./shared/CommonButton"


const NewCustomerDiscount = () => {
    return (
        <section className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="w-full lg:w-[60%] space-y-4">
                <h4>Big Deal</h4>
                <h2 className="text-5xl font-semibold">30% Off for New Customers</h2>
                <CommonButton text={"Shop Now"} />
            </div>
            <div className="w-full lg:w-[40%] flex justify-center items-center ">
                <Image src={"/images/discount/discount1.png"} alt="product" width={100} height={100}/>
            </div>

        </section>
    )
}

export default NewCustomerDiscount