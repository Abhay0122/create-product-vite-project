import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className='mb-5'>
      <label className='text-xl' htmlFor="search"></label>
      <input
      placeholder='search for products....'
      className=' px-12 py-2 mt-3'
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className='border-0 px-12 py-2 mt-3 hover:bg-pink-500 font-semibold bg-black text-white' type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
