import React, { useState } from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Stock: {product.stock}</p>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

const SearchFilter = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search by name, category"
        value={filters.search}
        onChange={handleInputChange}
      />
      <select
        name="stockStatus"
        value={filters.stockStatus}
        onChange={handleInputChange}
      >
        <option value="">All Stock Levels</option>
        <option value="low">Low Stock</option>
        <option value="out">Out of Stock</option>
        <option value="in">In Stock</option>
      </select>
    </div>
  );
};

const App = () => {
  const [filters, setFilters] = useState({ search: "", stockStatus: "" });

  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S21",
      category: "Smartphones",
      stock: 10,
      image: "",
    },
    {
      id: 2,
      name: "iPhone 13",
      category: "Smartphones",
      stock: 0,
      image: "",
    },
    {
      id: 3,
      name: "Bluetooth Headphones",
      category: "Accessories",
      stock: 3,
      image: "",
    },
    {
      id: 4,
      name: "4G Router",
      category: "Routers",
      stock: 5,
      image: "",
    },
    {
      id: 5,
      name: "SIM Card",
      category: "Accessories",
      stock: 15,
      image: "",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const searchMatch =
      product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      product.category.toLowerCase().includes(filters.search.toLowerCase());
    const stockMatch =
      !filters.stockStatus ||
      (filters.stockStatus === "low" && product.stock > 0 && product.stock <= 5) ||
      (filters.stockStatus === "out" && product.stock === 0) ||
      (filters.stockStatus === "in" && product.stock > 5);

    return searchMatch && stockMatch;
  });

  return (
    <div>
      <h1>Telecom Product Management</h1>
      <SearchFilter filters={filters} setFilters={setFilters} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
