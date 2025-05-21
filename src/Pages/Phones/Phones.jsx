import { useLoaderData } from "react-router-dom"
import Phone from "./Phone"

const Phones = () => {

  const phones = useLoaderData()
  console.log(phones)

  return (
    <div className="min-h-[90vh] max-w-7xl mx-auto ">
      <h2 className="my-10 text-center text-2xl">All Phones Here : {phones.length}</h2>

      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2 md:px-0 px-5 mb-20">
        {
          phones.map((phone, idx) => <Phone key={idx} phone={phone} />)
        }
      </div>
    </div>
  )
}

export default Phones