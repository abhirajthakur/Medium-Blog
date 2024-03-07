import { SignupInput } from "@abhirajthakur/medium-common";
import axios, { AxiosError } from "axios";
import { Report } from "notiflix/build/notiflix-report-aio";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Quote } from "../components/Quote";

export const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<SignupInput>();

  const sendSignupRequest: SubmitHandler<SignupInput> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signup`,
        data,
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);
      navigate("/blogs");
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        Report.failure(
          "Error while signing up",
          e.response.data.error,
          "Try Again",
        );
      } else if (e instanceof AxiosError && e.request) {
        Report.failure(
          "Error while signing up",
          e.request.responseText,
          "Try Again",
        );
      } else {
        alert(e);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center p-8">
        <div className="lg:px-20 xl:px-24 2xl:px-32">
          <h2 className="text-2xl font-bold text-gray-700">
            Create your account
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Already have an account?
            <Link className="pl-2 underline" to="/signin">
              Sign in
            </Link>
          </p>
          <form
            onSubmit={handleSubmit(sendSignupRequest)}
            className="mt-8 space-y-6"
          >
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Name"
                type="text"
                required
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Email"
                type="email"
                required
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Password"
                type="password"
                required
                {...register("password", { required: true })}
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-blue-500 w-full text-white px-4 py-2 font-semibold rounded-md hover:bg-blue-400 hover:shadow-lg focus:outline-none"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};
