import NewCustomerDiscount from "@/components/NewCustomerDiscount";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Summer from "@/components/Summer";


export default function Home() {
  return (
   <>
   <div className="">
    <Header />
    <NewCustomerDiscount />
    <Summer />
    <Footer />
   </div>
   </>
  );
}
