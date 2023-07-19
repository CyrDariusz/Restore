import { useEffect, useState } from "react";
import { Product } from "./product";



function App() {

  
  
  const [products,setProducts] = useState<Product[]>([]);
  
  useEffect (()=>{
    fetch('http://localhost:5000/api/products')
      .then(response=>response.json())
      .then(data => setProducts(data))
  },[])

  
  function addProduct(){
    setProducts([...products,])
  }
  

  return (
     <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((product)=>(
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>AddProduct</button>
     </div>
  );
}

export default App;
