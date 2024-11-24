import Banner from "@/components/Banner";
import FeaturedProduct from "@/components/FeaturedProduct";
import NewCustomerDiscount from "@/components/NewCustomerDiscount";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Summer from "@/components/Summer";


export default function Home() {
  return (
   <>
   <div className="">
    <Header />
    <Banner />
    <FeaturedProduct />
    <NewCustomerDiscount />
    <Summer />
    <Footer />
   </div>
   </>
  );
}
