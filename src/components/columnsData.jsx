import {Button} from 'antd'
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
      render: (item) => <Button className='hover:bg-red-500 bg-red-500 text-white'>Delete</Button>,
      className: 'table-cell-center'
    },
    {
      title: 'Update',
      render: (item) => <Button type="primary">Update</Button>,
      className: 'table-cell-center'
    },
  ];


  export default columnsData