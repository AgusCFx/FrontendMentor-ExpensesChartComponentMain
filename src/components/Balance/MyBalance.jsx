import React from 'react'
import "./MyBalance.css"

export const MyBalance = () => {
  return (
    <div className="myBalanceContainer">
        <div className='myBalanceContainer__info'>
            <h1 className='sizeText2'>My balance</h1>
            <p className='firstText sizeText1'>$921.48</p>
        </div>
        <svg className='myBalanceContainer__logo' width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23"/></g></svg>
    </div>
  )
}
