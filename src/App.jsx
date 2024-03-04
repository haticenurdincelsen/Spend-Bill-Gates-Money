import { useEffect, useState } from 'react';
import './App.css'
import Header from "./components/Header";
import products from "./products"
import Product from './components/Product';
import Basket from "./components/Basket";




function App() {
 const [money,setMoney]=useState(100000000000)
 const [basket,setBasket]=useState([])
 const [total,setTotal]=useState(0)

 useEffect(()=>{
  setTotal(basket.reduce((acc,item)=>{
    
    

    return acc+(item.amount*(products.find(product=>product.id===item.id).price))
  },0)
  )
 },[basket])

  return (
    <>
    <div>
      <img className='bill' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DNJHrMbf39VirY7MCC0StMeCGOsdfKF8BQ&usqp=CAU" alt="" />
        <p className='p'>Spend Bill Gates' Money</p>
    </div>

      <nav className='nav' >
        
      <Header total={total} money={money}/>
      </nav>
      
      <div className='container'>
      {products.map(product=>(
        <Product key={product.id} total={total} money={money} basket={basket}setBasket={setBasket} product={product}/>
      ))}
      </div>
     
      <div className='total'>
        <h1>Your Receipt</h1>
      {total>0 && (
        <Basket products={products} total={total} basket={basket}/>
      )}
      </div>
      
      
    </>
  )
}

export default App;
