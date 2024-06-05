import React from 'react'
import { Outlet } from 'react-router-dom'
import img1 from "../assets/img1.svg"

const layout = () => {
  return (
    <div>
      <div>
        <img src={img1} alt="" />
      </div>

      <div>
          <Outlet/>
      </div>

      <div>
        footer
      </div>
      </div>
  )
}

export default layout