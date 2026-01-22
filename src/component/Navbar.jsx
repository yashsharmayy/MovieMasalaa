import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <div>
            <nav className="flex items-center justify-between p-4 px-8 bg-[#1D546D] shadow-md">
                <div className="flex items-center">
                    <span className="font-bold text-xl text-[#a2d8db] ">Movie Masalaa</span>
                </div>
                <ul className="flex space-x-12 mr-10">
                    <Link className="text-[#a2d8db]  hover:text-gray-900" to='/'>Home</Link>
                    <Link className="text-[#a2d8db]  hover:text-gray-900" to={'/favourite'}>  Favourite  <span ><i className="ri-heart-line"></i></span></Link>
                </ul>

            </nav>

        </div>
    )
}

export default Navbar