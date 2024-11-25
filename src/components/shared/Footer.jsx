
import Image from "next/image"
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { GrLinkedinOption } from "react-icons/gr";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#1D1D1D] text-white">
      <section className="container mx-auto py-10 px-4">
        <div className=" flex flex-col lg:flex-row justify-between gap-6 lg:gap-16 "> 
        <div className="w-full lg:w-[50%] space-y-2">
          <Image src="/images/header/footer.png" alt="logo" height={40} width={120} />
          <p className="max-w-lg">Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est. </p>
        </div>
        
        <div className="w-full lg:w-[50%]">
          <div className="flex flex-col justify-center gap-10 ">
            <div className="space-y-2">
              <h3 className="uppercase">Sign Up For Our Newsletter!</h3>
              <p>Get notified about updates and be the first to get early access to new Podcast episodes.</p>
            </div>

            <form className="lg:max-w-2xl w-full flex items-center">
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                className=" w-full p-4 outline-none rounded-l-md"
              />

              <button className="p-4 bg-primary text-white font-bold rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        </div>

        {/* contact part */}
        <div className="grid grid-cols-1 md:grid-cols-4 justify-between md:gap-14 pt-6 space-y-4 md:space-y-0">
          <div className="">
            <h5>Contact Us</h5>
            <p>support@we5ive.com</p>
          </div>
          <div>
            <h5>About Us</h5>
            <p>Contact Us</p>
          </div>
          <div>
            <h5>Privacy policy</h5>
            <p>Terms & Condition</p>
          </div>
          <div>
            <h5>Social Link</h5>
            <span className="flex gap-3 pt-3">
            <FaFacebook />
            <RiTwitterXFill />
            <GrLinkedinOption />
            </span>
          </div>
        </div>

      </section>
        <div className="bg-primary text-center py-1">
          <h4>© {currentYear} | We5ive</h4>
        </div>
    </footer>
  )
}

export default Footer