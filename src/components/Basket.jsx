import {useState} from 'react'
import Basketitem from "./Basketitem";


function Basket({basket,total,products}) {
  return (
    <>
    {
    basket.map(item=>(
       <Basketitem item={item} product={products.find(p => p.id===item.id)}/>
    ))}
    <div>
      <br /><br />
        Toplam : $ {total}
    </div>
    </>
  )
}
export default Basket