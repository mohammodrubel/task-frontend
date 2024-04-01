import React from 'react';
import Navigation from '../components/Navigation';
import { useGetAllUsersQuery } from '../App/featchers/auth/authApi';
import { Table, Button } from 'antd';
import Loading from '../components/Loading';
import Error from '../components/Error';

function UserData() {
  const { isLoading, isError, data } = useGetAllUsersQuery();

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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Deleted Users',
      dataIndex: 'isDeleted',
      key: 'isDeleted',
      render: (isDeleted) => (
        <Button type="primary">{isDeleted ? 'Deleted User' : 'Active'}</Button>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (item) => (
        <Button type="primary">
          {item?.role === 'User' ? 'Convert to Admin' : 'Convert to User'}
        </Button>
      ),
    },
  ];

  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <Table pagination={false} scroll={{ x: true }}  dataSource={dataSource} columns={columns} responsive />
      </div>
    </>
  );
}

export default UserData;
