import React from 'react';
import { Link } from 'react-router-dom';
import { category } from '../../untils/Data/category';
import products from '../../untils/Data/products'

const CollectionsGrid = () => {
  const collection = category.filter((item, i) => item.collection == true);

  const totalProduct=(catId)=>{
    return products.filter((item,i)=>item.category == catId)
  }
console.log();
  return (
    <div className="py-12">
      {/* page Title */}
      <div>
        <p className="text-center text-5xl font-medium text-black">
          Collections
        </p>
      </div>
      {/* grid */}
      
      <div className="container  mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-5">
        {collection.map((item, i) => (
         <div key={i} className='pt-5' style={{cursor:'pointer'}}>
         <Link to={`/category/${item.id}`}>
           <div>
             <div className="bg-gray-300 p-5">
               <img
                 src={item.image}
                 alt=""
                 className="object-fill rounded h-full w-full"
               />
             </div>
             <div className="px-5 py-2">
               <div>
                 <p className="text-2xl font-medium">{item.categoryTitle}</p>
               </div>
               <div>{totalProduct(item.id).length} total product</div>
             </div>
           </div>
         </Link>
       </div> 
        ))}
      </div>
    </div>
  );
};

export default CollectionsGrid;