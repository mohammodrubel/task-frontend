import React, { useState } from 'react';
import { Table, Pagination, Button } from 'antd';

function GetTableData() {
  const [params, setParams] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const selectOptions = [
    {
      value: 'APPROVED',
      label: 'APPROVED',
    },
    {
      value: 'PENDING',
      label: 'PENDING',
    }
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
      filters: selectOptions.map((item) => ({ text: item.label, value: item.value })),
      onFilter: (value, record) => record.category === value,
    },
    {
      title: 'OrderDate',
      dataIndex: 'orderDate',
      key: 'orderDate',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Created Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
    },
    {
      title: 'Delete',
      render: (item) => <Button className='bg-red-500 text-white'>Delete</Button>,
      className: 'table-cell-center'
    },
    {
      title: 'Update',
      render: (item) => <Button type="primary">Update</Button>,
      className: 'table-cell-center'
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className='container mx-auto'>
      <Table 
        columns={columns} 
        dataSource={data} 
        onChange={onChange} 
        scroll={{ x: true }} // Add this line for horizontal scroll
      />
    </div>
  );
}

export default GetTableData;
