import Banner from "@/components/Banner";
import FeaturedProduct from "@/components/FeaturedProduct";
import NewCustomerDiscount from "@/components/NewCustomerDiscount";
import Summer from "@/components/Summer";


export default function Home() {
  return (
   <>
   <div className="">
    <Banner />
    <FeaturedProduct />
    <NewCustomerDiscount />
    <Summer />
   </div>
   </>
  );
}
