import React from 'react';
import useProducts from '../../../hooks/useProducts';

const ManageItem = () => {
    const [products] = useProducts();
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
                <td><button className="btn btn-xs bg-red-600 text-white">Remove</button></td>
            </tr>           
          ))}
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default ManageItem;