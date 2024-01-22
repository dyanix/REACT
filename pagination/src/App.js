import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products,setProducts] = useState([])
  const [page,setPage] =useState(1)

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
      <div className="App-header" >
        {
          products.slice(page*10-10,page*10).map((products)=>{
            return( 
            <div style={{height:"300px" ,width:"300px" , backgroundColor:"white" ,color:"black"  ,borderRadius:"10px"}}>
              {products.title}
              <img style={{height:"240px" ,width:"300px" }} src={products.thumbnail} alt={products.title}/>
            </div>
            
            )
          })
        }
          </div>
          <div className='pagination'>
          <span> left</span>
       {[...Array(products.length /10)].map((_,i)=>{
        return<span key={i}>{i+1}</span>

       })}
        <span>right</span>

          </div>
       
        
    
    </div>
  );
}

export default App;
