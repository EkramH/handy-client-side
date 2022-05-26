import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';


const Myreview = () => {
    const [user] = useAuthState(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const onSubmit = (data) => {
        console.log(data);
      };

    return (
        <div>
            <h2 className="text-2xl p-4 text-primary">My Reviews</h2>
            <label htmlFor="review-modal" className="btn mx-4 modal-button text-white">Add review</label>

            {/* Add Review Modal */}
            <input type="checkbox" id="review-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle z-10">
        <div className="modal-box">
          <label
            htmlFor="review-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-accent">
            Add Review:
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-3 justify-items-center pt-5"
          >
            <input 
                type="text"
                name="name"
                readOnly
                value={user?.displayName || ""} 
                className="input input-bordered w-full max-w-xs font-semibold" 
                {...register("name")} />
            
            <input
                type="text"
                name="name"
                readOnly
                value={user?.email || ""} 
                className="input input-bordered w-full max-w-xs font-semibold"
                {...register("email")} />

            <textarea 
                className="textarea input input-bordered w-full max-w-xs font-semibold" 
                placeholder="Your review // Minimum 2 words"
                {...register("details", { required: true, minLength: 2, maxLength: 120, })}
                ></textarea>

            <input 
                type="submit"
                className="btn btn-primary input-bordered w-full max-w-xs"
                 />
          </form>
        </div>
      </div>
            
        </div>
    );
};

export default Myreview;