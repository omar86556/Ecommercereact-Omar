import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";

function NavBar({changeView,pts}) {
  return (
    <div >
      <div className='d-flex align-items-center justify-content-between m-3'>
        <img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png" alt="logo" className='' style={{ width: "125px" }} />
        <div className='d-flex'>
          <h3 className='mx-2' onClick={()=>changeView("home")}>home</h3>
          <h3 className='mx-2' onClick={()=>changeView("create")}>create product</h3>
        </div>  
        <div onClick={()=>changeView("cart")}>
          <div style={{position: "relative", padding: "30px"}}>
          <FaCartArrowDown size={50} />
          <span class="badge text-bg-danger" style={{position: 'absolute', right: "1", top: "1", zIndex: "88"}}>{pts}</span>
          </div>

          
        </div>
      </div>

      <hr />
    </div>
  )
}

export default NavBar
