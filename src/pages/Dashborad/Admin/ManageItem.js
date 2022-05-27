import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useProducts from '../../../hooks/useProducts';

const ManageItem = () => {
    const [products] = useProducts();

    const productDelete = (id) =>{
        Swal.fire({
          title: "Are you sure to delete this?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yeahh ",
        }).then((result) => {
          if (result.isConfirmed) {
            const url = `https://boiling-garden-19713.herokuapp.com/products/${id}`;
            fetch(url, {
              method: "DELETE",
            })
              .then((response) => response.json())
              .then((data) => {
                toast.success(`Product Delete! Refresh Your Page.`);
            });
          }
        });
      }
    return (
        <div>
            <h2 className="text-2xl p-4 text-primary">Manage Item: {products.length}</h2>
            <div className="overflow-x-auto px-2">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
  
            <tbody>

            {products.map((product) => (
                <tr key={product._id}>
                <th></th>
                <td><img className='w-10 h-10' src={product.img} alt=''/></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td><button onClick={() => productDelete(product._id)} className="btn btn-xs bg-red-600 text-white">Remove</button></td>
            </tr>           
          ))}
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default ManageItem;