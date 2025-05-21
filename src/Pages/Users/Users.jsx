import { useLoaderData } from "react-router-dom"

const Users = () => {
    const usersData = useLoaderData()
    console.log(usersData)

    const handleAddUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { name, email, password }

    }



    return (
        <div className="max-w-7xl mx-auto min-h-[70vh] py-20 grid grid-cols-2 gap-5">
            <div>
                <h1 className="mb-5 text-2xl font-semibold text-emerald-600">Total Users: {usersData.length}</h1>

                <div className="grid grid-cols-2 gap-2">
                    {usersData.map((user, idx) => (
                        <div key={idx} className="border p-5 rounded-md hover:shadow-2xl transition-all  cursor-pointer active:shadow-none">
                            <h1>Name: {user.name}</h1>
                            <h1>Email: {user.email}</h1>
                            <h1>Password: {user.password}</h1>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-10 flex flex-col items-center">
                <h1 className="text-2xl mb-5 font-semibold text-emerald-600">Enter Your Data</h1>

                <form onSubmit={handleAddUser} className="w-96 border grid gap-3 p-5 rounded-md hover:shadow-2xl transition-all duration-500">
                    <input className="border rounded-md px-4 py-2" type="text" name="name" placeholder="Enter your name" id="" />
                    <input className="border rounded-md px-4 py-2" type="text" name="email" placeholder="Enter your email" id="" />
                    <input className="border rounded-md px-4 py-2" type="text" name="password" placeholder="Enter your password" id="" />
                    <input className="border rounded-md px-4 py-2 bg-emerald-600 hover:bg-emerald-400 cursor-pointer active:scale-95 transition-all " type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Users