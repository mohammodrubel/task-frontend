import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import { toast } from 'sonner'; // Corrected import statement
import { useUpdateProductMutation } from "../../App/featchers/product/ProductApi";

function UpdateProductModel({item}) {
  const [updateData, { isLoading, isError, data: updatedData }] = useUpdateProductMutation();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => { // Renamed formData to avoid conflict
    const information = {
      name:  formData?.name || item?.name ,
      orderDate: formData?.orderDate || item?.orderDate,
      price: Number(formData?.price) || item?.price
    };
    try {
      const dataToSend = { id: item._id, data: information }; 
      const res = await updateData(dataToSend);
      toast.success(res?.data?.data?.messege); 
      console.log(res);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Update Product
      </Button>
      <Modal
        title="Update Your Product"
        visible={open}
        footer={null} // Remove footer (buttons)
        onCancel={() => setOpen(false)}
      >
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="Product Name"
                className="block text-sm font-semibold mb-2"
              >
                Product Name
              </label>
              <input
                {...register("name", { required: true })}
                defaultValue={item?.name}
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Price"
                className="block text-sm font-semibold mb-2"
              >
                Price
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                defaultValue={item?.price}
                id="number"
                name="price"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Order Date
              </label>
              <input
                {...register("orderDate", { required: true })}
                defaultValue={item?.orderDate}
                type="date"
                id="orderDate"
                name="orderDate"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default UpdateProductModel;
