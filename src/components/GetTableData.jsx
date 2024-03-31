import React, { useState } from 'react';
import { Table, Pagination, Button } from 'antd';
import columnsData from './columnsData'


function GetTableData() {
  const [params, setParams] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
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
        columns={columnsData} 
        dataSource={data} 
        onChange={onChange} 
        scroll={{ x: true }} 
        pagination={false}
      />
    </div>
  );
}

export default GetTableData;
