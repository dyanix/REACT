import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products,setProducts] = useState([])

const handleClick = async() =>{
 const response = await fetch(`https://dummyjson.com/products?limit=100`)
 const data = await response.json()

 
 setProducts(data.products)
 console.log(data.products);
 
}
useEffect(()=>{
  handleClick()

},[])
  return (
    <div className="App">
      <header className="App-header">
        {
          products.map((products)=>{
            return <div style={{height:"30px" ,width:"800px" , backgroundColor:"white" ,color:"black" ,marginBottom:"10px" ,marginTop:"10px" ,borderRadius:"10px"}}>
              {products.title}

            </div>
          })
        }
        <h1>
     </h1>
      </header>
    </div>
  );
}

export default App;
