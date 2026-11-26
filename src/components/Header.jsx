

function Header() {
  return (
    <div>
       <div className="flex text-center justify-end space-x-4 bg-gray-800 p-4 ">
           <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:cursor-pointer">Home</button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:cursor-pointer">About</button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:cursor-pointer">Contact</button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:cursor-pointer">Shopping Cart</button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:cursor-pointer">Login</button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:cursor-pointer">Register</button>
       </div>
    </div>
  )
}
export default Header