import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../../App/featchers/product/ProductApi";
import { toast } from 'sonner'

function CreateProductModal() {
  const [addNewProduct, { isLoading, isError, data: createData }] = useCreateProductMutation();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const information = {
      name: data?.name,
      orderDate: data?.orderDate,
      price: Number(data?.price)
    };
    try {
      const res = await addNewProduct(information);
      toast.success(res?.data?.data?.messege);
      console.log(res);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
      <Button type="primary" className="my-10" onClick={showModal}>
        Create New Product
      </Button>
      <Modal
        title="Create Product"
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
                Create Product
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default CreateProductModal;
