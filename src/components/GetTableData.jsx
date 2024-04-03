import React, { useState } from 'react';
import { Table, Pagination, Button } from 'antd';
import CreateProductModal from './Modal/CreateProductModal';
import DeleteProductModel from './Modal/DeleteProductModel';
import { useGetAllProductQuery, useProductApprovedMutation } from '../App/featchers/product/ProductApi';
import selectOptions from './columnsData'
import UpdateProductModel from './Modal/UpdateProductModel';
import {useSelector} from 'react-redux'
import { usreCurrentUser } from '../App/featchers/auth/authSlice';
import {toast} from 'sonner'


function GetTableData() {
  const userRole = useSelector(usreCurrentUser)
  const [approvedData,{data:deleteData}] = useProductApprovedMutation()
  const admin =  userRole?.role === 'Admin'
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
  const handleApprove = async(item)=>{
    const updateData = {...item,completed: "APPROVED"}
    const dataToSend = { id: item._id, data: updateData }
    const res =await  approvedData(dataToSend)
    toast.success("Approved successfull")
    
  }
  
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
    onFilter: (value, record) => record.completed === value,
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
  }
];
const onChange = (pagination, filters, sorter, extra) => {
  if(extra.action === "filter"){
    const queryFilter = []
    filters.completed?.forEach((item) => queryFilter?.push({name:"completed",value:item}))
  }
};



  return (
    <div className='container mx-auto'>
     <div className='flex justify-between items-center'>
     <CreateProductModal/> <br />
      <input onChange={(e)=>setInputData(e.target.value)} type="text" className='border p-2 w-[40%] rounded outline-none my-4' placeholder='Search Your Product' />
     </div>
      <Table 
      loading={isLoading}
      columns={[
        ...columnsData,
        admin && {
          title: 'Approved Order',
          render: (item) => (
            <Button type='primary'  onClick={() => handleApprove(item)}>Approved</Button>
          ),
          key: 'approved',
        }
      ].filter(Boolean)} 
        dataSource={data} 
        onChange={onChange} 
        scroll={{ x: true }} 
        pagination={false}
      />
      <div className='mt-10'>
        <Pagination onChange={(value)=>setPage(value)} pageSize={limit} defaultCurrent={1} total={meta?.TotalCount} />
        </div>
    </div>
  );
}

export default GetTableData;
