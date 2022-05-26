import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const UpdateProfile = ({refetch}) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();

      const [user] = useAuthState(auth);
      const onSubmit = async (data) =>{
          console.log(data)

          fetch(`https://boiling-garden-19713.herokuapp.com/user/${user.email}`, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json' 
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success(`Order item deleted!`);
                reset()
                refetch()
            });
      }


    return (
        <div>
            <div className="my-5 flex justify-center items-center">
        <div className="card w-96 bg-white shadow-xl">
          <div className="card-body">
          <h2 className="text-2xl text-primary text-center">Update Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)} 
            className="grid grid-cols-1 gap-3 justify-items-center pt-5">
            <input 
                type="text"
                name="name"
                value={user.displayName}
                placeholder='Your Name'
                className="input input-bordered w-full max-w-xs font-semibold" 
                {...register("name", { required: true, minLength: 1, })} />

            <input 
                type="text"
                name="email"
                value={user.email}
                readOnly
                className="input input-bordered w-full max-w-xs font-semibold" 
                {...register("email", { required: true })} />   

            <input            
                type="text"
                name="address"
                placeholder='Your address // Dhaka'
                className="input input-bordered w-full max-w-xs font-semibold" 
                {...register("address", { required: true, minLength: 1, maxLength: 30 })} />

            <input            
                type="text"
                name="link"
                placeholder='Your Github link'
                className="input input-bordered w-full max-w-xs font-semibold" 
                {...register("github", { required: true})} />         

            <input 
                type="submit"
                value="Update"
                className="btn btn-primary input-bordered w-full max-w-xs"
                 />
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default UpdateProfile;