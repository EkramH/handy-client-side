import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Additem = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();

      const onSubmit = async (data) => {
          fetch(`https://boiling-garden-19713.herokuapp.com/products`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((result) => {
            Swal.fire("New Product Added Succesfully");
            reset(); 
          });     
      };

    return (
        <div>
            <h2 className="text-2xl p-4 text-primary">Add Item</h2>
            <div className="my-20 flex justify-center items-center">
        <div className="card w-96 bg-white shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} 
            className="grid grid-cols-1 gap-3 justify-items-center pt-5">
            <input 
                type="text"
                name="name"
                placeholder='Item Name'
                className="input input-bordered w-full max-w-xs font-semibold" 
                {...register("name", { required: true, minLength: 2, })} />

            <input 
                type="text"
                name="image"
                placeholder='Item Image'
                className="input input-bordered w-full max-w-xs font-semibold" 
                {...register("img", { required: true,})} />
            
            <textarea 
                className="textarea input input-bordered w-full max-w-xs font-semibold" 
                placeholder="Details // min 10 words"
                {...register("details", { required: true, minLength: 10, maxLength: 250, })}
                ></textarea>
            
            <input
                type="number"
                name="price"
                placeholder="Price // min 1 "
                className="input input-bordered w-full max-w-xs font-semibold"
                {...register("price", {  valueAsNumber: true, required: true, min: 1, })} />

            <input
                type="number"
                name="quantity"
                placeholder="Quantity // min 100 and max 500"
                className="input input-bordered w-full max-w-xs font-semibold"
                {...register("quantity", { valueAsNumber: true, required: true, min: 100, max: 5000 })} />


            <input
                type="number"
                name="minOrder"
                placeholder="Minimum Order // min 10 and max 100"
                className="input input-bordered w-full max-w-xs font-semibold"
                {...register("minOrder", {
                    valueAsNumber: true, required: true, min: 10, max: 100
                  })} />

            <input 
                type="submit"
                className="btn btn-primary input-bordered w-full max-w-xs"
                 />
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Additem;