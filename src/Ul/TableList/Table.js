import React from 'react';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';

const MyTable = ({ data, products,handleDelete,handleProductUpdate }) => {
   
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Serial</th>
          <th>Picture</th>
          <th>Name</th>
          {products ? <th>Price</th> : <th>Email</th>}
          {products ? <th>Quantity</th> : <th>User Role</th>}
          {products && <th>Category</th>}
          {products && <th>Vendor Name</th>}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, i) => {
            return (
              <tr key={i} className="h-10">
                <th scope="row">{i + 1}</th>
                <td>
                  <img
                    src={products ? item?.productImage[0]?.url : item.avatar.url}
                    className="rounded-full w-12 h-12"
                    alt=""
                  />
                </td>
                <td>{products ? item.productName : item.name}</td>
                <td>{products ? item.productPrice : item.email}</td>
                <td>{products ? item.productStock : item.role}</td>
                {products && (
                  <>
                    <td>{item.productCategory}</td>
                    <td>{item.productSellerName}</td>
                  </>
                )}

                <td>
                  <div className="flex gap-3">
                    <button onClick={()=>handleProductUpdate(item)}>
                      <BsPencilSquare className="text-green-700 text-3xl" />
                    </button>
                    <button onClick={()=>handleDelete(item._id)}>
                      <BsFillTrashFill className="text-red-700 text-3xl" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default MyTable;
//item.avatar.url
