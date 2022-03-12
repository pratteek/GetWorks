import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
    <div className="bg-gray-700">
      <div className="h-16 px-8 flex items-center">
        <p onClick={(e)=> navigate('/')} className="text-white font-bold cursor-pointer ">GetWorks</p>
      </div>
    </div>
    )
}

export default Navbar

