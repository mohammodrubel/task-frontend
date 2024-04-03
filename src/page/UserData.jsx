import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { useDeleteUsersMutation, useGetAllUsersQuery } from '../App/featchers/auth/authApi';
import { Table, Button } from 'antd';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Toaster, toast } from "sonner";


function UserData() {
  const [deleteData] = useDeleteUsersMutation()
  const { isLoading, isError, data } = useGetAllUsersQuery();
  
  
const handelDelete = async(item)=>{
  try{
    const res = await  deleteData(item)
  toast.success(res?.data?.data?.messege);
  }catch(error){
    toast.error(error?.data?.message);
  }
}

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && isError) {
    return <Error error="Something went wrong" />;
  }

  if (!isLoading && !isError && data?.data?.data.length === 0) {
    return <Error error="No data found" />;
  }

  const dataSource = data?.data?.data;

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      key: 'role',
      render:(item)=> <Button type={item.role === 'User' ? 'dashed' : 'primary'}>{item.role}</Button>
    },
    {
      title: 'Action',
      key: 'action',
      render: (item) => (
        <Button type="primary" onClick={()=>handelDelete(item._id)}>
          Delete User
        </Button>
      ),
    },
  ];

  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <Table pagination={false} scroll={{ x: true }}  dataSource={dataSource} columns={columns}  />
      </div>
      <Toaster richColors position="top-right" />
    </>
  );
}

export default UserData;
