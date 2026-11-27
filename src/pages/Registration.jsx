import { useId, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

function Registration() {
  const [serverError, setServerError] = useState("");
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();
  const usernameId = useId();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setServerError("");
    try {
      console.log(data);
    } catch (error) {
      setServerError("An error occurred while logging in.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-6 bg-gray-300 overflow-x-hidden">
      <form
        className="w-full max-w-sm p-5 sm:p-6 mx-auto bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="mb-4 sm:mb-5">
          <label
            htmlFor={usernameId}
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Username
          </label>
          <input
            type="text"
            id={usernameId}
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg 
            focus:ring-gray-500 focus:border-gray-500 aria-invalid:border-red-500"
            placeholder="username"
            aria-invalid={errors.username ? "true" : "false"}
            aria-describedby={
              errors.username ? `${usernameId}-error` : undefined
            }
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors.username && (
            <p id={`${usernameId}-error`} className="mt-1 text-sm text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="mb-4 sm:mb-5">
          <label
            htmlFor={emailId}
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            id={emailId}
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg 
            focus:ring-gray-500 focus:border-gray-500 aria-invalid:border-red-500"
            placeholder="name@example.com"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p id={`${emailId}-error`} className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-4 sm:mb-5">
          <label
            htmlFor={passwordId}
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id={passwordId}
              className="w-full p-2.5 pr-10 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 aria-invalid:border-red-500"
              placeholder="••••••••"
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby={
                errors.password ? `${passwordId}-error` : undefined
              }
              {...register("password", { required: "Password is required" })}
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                </svg>
              )}
            </button>
          </div>

          {errors.password && (
            <p id={`${passwordId}-error`} className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-4 sm:mb-5">
          <label
            htmlFor={confirmPasswordId}
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id={confirmPasswordId}
              className="w-full p-2.5 pr-10 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 aria-invalid:border-red-500"
              placeholder="••••••••"
              aria-invalid={errors.confirmPassword ? "true" : "false"}
              aria-describedby={
                errors.confirmPassword
                  ? `${confirmPasswordId}-error`
                  : undefined
              }
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
            />
            <button
              type="button"
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                </svg>
              )}
            </button>
          </div>

          {errors.confirmPassword && (
            <p
              id={`${confirmPasswordId}-error`}
              className="mt-1 text-sm text-red-600"
            >
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-5 py-2.5 text-sm font-medium text-center text-white bg-zinc-950 rounded-lg hover:bg-zinc-800 cursor-pointer focus:ring-4 focus:outline-none focus:ring-zinc-300"
        >
          Register
        </button>

        {serverError && (
          <p className="mt-2 text-sm text-red-600 text-center">{serverError}</p>
        )}

        <p className="text-sm text-center mt-6 text-neutral-600">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-zinc-950 transition-all duration-200 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Registration;
