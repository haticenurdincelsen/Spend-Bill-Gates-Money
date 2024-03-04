import {useState} from 'react'
import { moneyFormat } from './Helper';

function Header({total,money}) {
  return (
    <>
    <div className='header'>
        {total>0 && money-total !=0 && (
           <div>  $ {moneyFormat(money-total)} </div>
           
        )}    
        {total === 0 && (
            <div>  $ {moneyFormat(money)}  </div>
        )}
        {money-total ===0 && (
            <div>0</div>
        )}
    </div>
    </>
    )
    }
export default Header;
