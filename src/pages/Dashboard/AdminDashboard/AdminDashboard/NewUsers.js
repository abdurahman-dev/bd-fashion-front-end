import React from 'react';
import { Link } from 'react-router-dom';

const NewUsers = ({ totalUsers }) => {
  const users = totalUsers.slice(-4).reverse();
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-between md:gap-4">
        <div className=" w-full">
          <div className="rounded-lg border my-4 p-3 shadow-sm border-gray-500 ">
            <p className="text-2xl font-semibold  mb-2">New Users</p>
            {users.map((item,i) => (
              <Link to="/manageUsers" key={i}> 
                  <div className="flex gap-2 border-t py-1 text-black">
                <div className="self-center">
                  <img
                    src={item.avatar.url}
                    alt="product img"
                    className="h-12 w-12"
                  />
                </div>
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.role}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUsers;
