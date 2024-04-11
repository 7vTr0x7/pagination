import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  const fetchProductData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products?limit=100");
      const json = await data.json();
      setProducts(json.products);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  console.log(products);

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {products.length > 0 && (
        <div className="m-5 p-0 grid gap-5 grid-cols-3">
          {products.slice(page * 10 - 10, page * 10).map((prod) => (
            <span
              className="h-36 p-5 text-center cursor-pointer "
              key={prod.id}>
              <img
                className="w-full h-full mb-2 object-cover"
                src={prod.thumbnail}
                alt={prod.title}
              />
              <span>{prod.title}</span>
            </span>
          ))}
        </div>
      )}

      {products.length > 0 && (
        <div className="flex my-4  justify-center p-5">
          <button className="bg-green-300 px-2 mx-2"> - </button>

          {[...Array(products.length / 10)].map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}

          <button className="bg-green-300 px-2 mx-2"> + </button>
        </div>
      )}
    </div>
  );
};

export default App;
