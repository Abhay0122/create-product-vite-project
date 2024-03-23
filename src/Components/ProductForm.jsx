import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({ name, price });
    setName('');
    setPrice(0);
  };

  return (
    <div className='bg-white p-5 w-1/2'>
      <h2 className='text-2xl font-bold bg-white'>Add Product</h2>
      <form onSubmit={handleSubmit}>

        <div className='flex flex-col mb-4 mt-4 '>
          <label className='text-xl font-semibold' htmlFor="name ">Product Name:</label>
          <input
            className='border border-black py-1 px-2'
            placeholder='product name...'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col mb-4 mt-4 '>
          <label className='text-xl font-semibold' htmlFor="price">Price:</label>
          <input
            className='border py-1 px-2'
            placeholder='Add ₹'
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button className='border px-12 py-2 mt-3 mb-4 hover:bg-blue-400 rounded-full font-semibold bg-black text-white' type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
