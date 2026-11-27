import { useNavigate } from "react-router"

function Header() {
  const navigate = useNavigate()

  return (
    <div>
       <div className="flex text-center justify-end space-x-4 bg-gray-800 p-4 ">
           <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:cursor-pointer" onClick={() => navigate('/')}>Home</button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:cursor-pointer" onClick={() => navigate('/about')}>About</button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:cursor-pointer" onClick={() => navigate('/contact')}>Contact</button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:cursor-pointer" onClick={() => navigate('/shopping-cart')}>Shopping Cart</button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:cursor-pointer" onClick={() => navigate('/login')}>Login</button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:cursor-pointer" onClick={() => navigate('/register')}>Register</button>
       </div>
    </div>
  )
}
export default Header