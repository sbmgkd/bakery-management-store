import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {
    handleSubmit,
    register,
    formState: {  },
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }}
  );
  
  const navigate = useNavigate();
  const onSubmit =  (data) => {
            console.log(data);  
  }
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-6 bg-gray-300 overflow-x-hidden">
      <form className="w-full max-w-sm p-5 sm:p-6 mx-auto bg-white rounded-lg shadow-md">
        <div className="mb-4 sm:mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-4 sm:mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="••••••••"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Login
        </button>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        Don&apos;t have any account?&nbsp;

        <Link
          to="/register"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
