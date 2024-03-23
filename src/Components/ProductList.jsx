import React from 'react';

function ProductList({ products }) {
  return (
    <div className='w-1/2'>
   <h2 className='text-2xl font-bold mb-4'> Your Products</h2>
    <div className='bg-white py-3'>

      {products.length > 0 ? (
        <ul className=''>
          {products.map((product) => (
            <li key={product.name}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-2xl font-bold px-3'>No products found.......</p>
      )}
    </div>
    </div>

  );
}

export default ProductList;
