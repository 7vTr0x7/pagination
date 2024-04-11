import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProductData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const json = await data.json();
    setProducts(json);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return <div>App</div>;
};

export default App;
