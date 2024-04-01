import React, { useState } from "react";
import { Button, Modal } from "antd";
import { toast } from 'sonner';
import { useDeleteProductMutation } from "../../App/featchers/product/ProductApi";

function deleteProductModel({item}) {
  const [deleteId,{data:deletedData}] = useDeleteProductMutation()
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handelDelete = async()=>{
    deleteId(item._id)
    setOpen(false);
    toast.success('Deleted data successfull')
  }
 
  
 
  return (
    <>
      <Button type="primary" className="bg-red-600 hover:bg-red-600" onClick={showModal}>
        Delete Product
      </Button>
      <Modal
        title="Delete Product"
        visible={open}
        onCancel={handleCancel}
        footer={null} // Remove footer to hide buttons
      >
        <div>
          <b className="text-red-500">Are you sure you want to delete this data?</b> <br />
          <div className="text-end">
          <Button onClick={handelDelete} className="text-red-500">Delete</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default deleteProductModel;
