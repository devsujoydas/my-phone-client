import { useNavigate } from "react-router-dom";

const Phone = ({ phone, }) => {
  const { id, brand, model, price, img, rating } = phone;
  const navigate = useNavigate()
  const navigateHandler = () => {
    navigate(`${id}`)
  }


  return (
    <div className="border rounded-xl p-4 bg-white ">

      <button onClick={navigateHandler}>
        <div className="overflow-hidden cursor-pointer">
          <img className="w-full scale-125 md:scale-110 md:hover:scale-125 duration-500 transition-all" src={img[0]} alt="" />
        </div>
          
        <div className="text-left">
          <h1 className="text-gray-400">{brand}</h1>
          <h1 className="font-semibold md:text-xl my-2">{model}</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold hover:text-[#F27F20] transition-all md:text-md text-xs">${price}</h1>
          <p className="flex items-center justify-center md:text-md text-xs">Rating : {rating}</p>
        </div>
      </button>
      <div className="flex justify-between items-center text-xs">
        <button onClick={()=>{}} className="bg-[#F27F20] mt-2 text-white md:px-4 md:py-2 px-2 py-2 rounded-md hover:bg-emerald-400 active:scale-95 transition-all">Buy Now</button>
        <button onClick={()=>{}} className="mt-2 border border-black md:px-4 md:py-2 px-2 py-2 hover:border-transparent rounded-md hover:bg-emerald-400 active:scale-95 transition-all">Add To Cart</button>
      </div>
    </div>
  )
}

export default Phone