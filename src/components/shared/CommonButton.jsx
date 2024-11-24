import { GoArrowUpRight } from "react-icons/go";

const CommonButton = ({text}) => {
  return (
    <div className="flex ">
    <button className="bg-primaryGray rounded-full px-4 py-2">{text}</button>
    <button className="bg-primaryGray rounded-full p-3"><GoArrowUpRight /></button>
</div>
  )
}

export default CommonButton