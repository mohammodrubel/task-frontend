import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
        <div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
    <h2 class="text-2xl font-bold mb-4">Register</h2>
    <form>
      <div class="mb-4">
        <label for="name" class="block text-sm font-semibold mb-2">Name</label>
        <input type="text" id="name" name="name" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-semibold mb-2">Email</label>
        <input type="email" id="email" name="email" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-sm font-semibold mb-2">Password</label>
        <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
      </div>
      <div class="flex justify-end">
        <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
      </div>
      <small>if you have already account Please <Link className='text-blue-500' to='/login'>Login</Link></small>
    </form>
  </div>
</div>
    </div>
  )
}

export default Register