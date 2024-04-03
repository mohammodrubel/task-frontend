import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useCreateUserMutation} from '../App/featchers/auth/authApi'
import { useForm } from "react-hook-form";
import {toast,Toaster} from 'sonner'
import {useNavigate} from 'react-router-dom'


function Register() {
  const [newUsers,{isError,isLoading,data}] = useCreateUserMutation()
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    const information = {
      name:data?.name,
      email:data?.email,
      password:data?.password,
    }
    if(data.password !== data.password2){
      return toast.error('password did not matched!')
    }
    try {
      const res = await newUsers(information).unwrap();
      toast.success(await res?.data?.messege);
      navigate('/login')
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };


  

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
              {...register("name", { required: true })}
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
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
            <div className="mb-6">
              <label
                htmlFor="password2"
                className="block text-sm font-semibold mb-2"
              >
                Re-Password
              </label>
              <input
              {...register("password2", { required: true })}
                type="password"
                id="password2"
                name="password2"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Register
              </button>
            </div>
            <small>
              if you have already account Please{" "}
              <Link className="text-blue-500" to="/login">
                Login
              </Link>
            </small>
          </form>
        </div>
      </div>
      <Toaster richColors position="top-right"  />
    </div>
  );
}

export default Register;
