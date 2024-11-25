import { GoArrowUpRight } from "react-icons/go";

const CommonButton = ({text}) => {
  return (
    <div className="flex ">
    <button className="bg-primary text-white rounded-full px-4 py-2">{text}</button>
    <button className="bg-primary text-white rounded-full p-3"><GoArrowUpRight /></button>
</div>
  )
}

export default CommonButton