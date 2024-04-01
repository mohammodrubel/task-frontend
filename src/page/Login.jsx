import React from "react";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../App/featchers/auth/authApi";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "../App/featchers/auth/authSlice";
import DecodeToken from "../components/DecodeToken/DecodeToken";
import {Navigate} from 'react-router-dom'

function Login() {
  const [login, { isLoading, isError, error, data: userSubmitData }] =
    useLoginMutation();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      const info = await DecodeToken(res?.data?.data?.accessToken);
      toast.success(res?.data?.data?.messege);
      dispatch(setUser({ user: info, token: res?.data?.data?.accessToken }));
      
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  if(userSubmitData?.success){
    return <Navigate to='/' replace={true}/>
  }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Login
              </button>
            </div>
            <p>
              if you have no account please{" "}
              <Link className="text-blue-500" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default Login;
