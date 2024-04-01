import React from 'react'
import Navigation from '../components/Navigation'
import { useGetAllUsersQuery } from '../App/featchers/auth/authApi'

function UserData() {
  const {isLoading, isError, data} = useGetAllUsersQuery()
  let content = 'Loading...';

  if (!isLoading) {
    if (isError) {
      content = 'Something went wrong';
    } else if (data?.data?.data.length === 0) {
      content = 'No data found';
    } else {
      content = data?.data?.data.map((item, index) => <p key={index}>Hello world</p>);
    }
  }

  return (
    <>
      <Navigation/>
      <div className='text-2xl'>{content}</div>
    </>
  )
}

export default UserData
