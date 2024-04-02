import React, { useState } from 'react';
import { Table, Pagination, Button } from 'antd';
import CreateProductModal from './Modal/CreateProductModal';
import DeleteProductModel from './Modal/DeleteProductModel';
import { useGetAllProductQuery } from '../App/featchers/product/ProductApi';
import selectOptions from './columnsData'
import UpdateProductModel from './Modal/UpdateProductModel';


function GetTableData() {
  const [params,setParams]=useState([])
  const [inputData,setInputData]=useState('')
  const [limit,setLimit]=useState(5)
  const [page,setPage]=useState(1)
  const {isLoading,isError,data:getAllProductData} = useGetAllProductQuery([
    { name: 'searchTerm', value: inputData },
    { name: 'limit', value: limit },
    { name: 'page', value: page },
    ...params
  ])
  const tableData = getAllProductData?.data?.data?.result
  const meta = getAllProductData?.data?.data?.metaData
  const data = tableData


  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  
 const columnsData = [
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
    render: (item) => <DeleteProductModel item={item} />,
    className: 'table-cell-center'
  },
  {
    title: 'Update',
    render: (item) => <UpdateProductModel item={item} />,
    className: 'table-cell-center'
  },
];


  return (
    <div className='container mx-auto'>
      <CreateProductModal/>
      <Table 
      loading={isLoading}
        columns={columnsData} 
        dataSource={data} 
        onChange={onChange} 
        scroll={{ x: true }} 
        pagination={false}
      />
      <div className='mt-10'><Pagination onChange={(value)=>setPage(value)} pageSize={limit} defaultCurrent={1} total={meta?.TotalCount} /></div>
    </div>
  );
}

export default GetTableData;
