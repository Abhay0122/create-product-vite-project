import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

function Home({ handleLogout, userData }) {
  const [products, setProducts] = useState([]); // Array to store products
  const [searchTerm, setSearchTerm] = useState(''); // Search term for filtering

  // Optionally uncomment and implement logic to fetch initial products from an API
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('your-api-endpoint');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  const handleAddProduct = (product) => {
    const existingProduct = products.find((p) => p.name === product.name);
    if (!existingProduct) {
      setProducts([...products, product]);
    } else {
      // Handle product duplication (e.g., display an error message)
      console.warn('Product already exists:', product.name);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase()); // Ensure case-insensitive search
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (

    <div className='bg-gray-200 w-full flex justify-center align-middle ' >

<div className='container bg-slate-300 p-5 rounded-lg'>
<h1 className=''> Welcome, {userData?.email}</h1>
      <button className='border px-12 py-2 mt-3 mb-4 hover:bg-pink-500 font-semibold bg-black text-white'  onClick={handleLogout}>Logout</button>
      <ProductForm onAddProduct={handleAddProduct} />
      <SearchBar onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
</div>


    </div>
  );
}

export default Home;
