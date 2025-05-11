import React, { useEffect, useState } from 'react'
import { assets } from '../Assets/assets'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from '../constants/navigation';



const Header = () => {
  const location = useLocation()
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
  const [searchInput, setSearchInput] = useState(removeSpace)
  const navigate = useNavigate()
  // console.log("Location of new",removeSpace)

  useEffect(()=>{
    if(searchInput){
      navigate(`/search?q=${searchInput}`)
    }
    // else{
    //   navigate('/')
    // }
  },[searchInput])

  const handleSubmit =(e) =>{
    e.preventDefault()
  }
    
  return (
    <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
      <div className='container mx-auto px-4 flex items-center h-full'>
        <div>
          <Link to='/' className='text-3xl text-orange-400 tracking-wider'>MOIVEO</Link>
        </div>
        <nav className='hidden lg:flex items-center gap-3 ml-5'>
          {
            navigation.map((nav, index) => {
              return (
                <div key={nav.label}>
                  <NavLink to={nav.href} className={({ isActive }) => `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                    {nav.label}
                  </NavLink>
                </div>
              )
            })
          }
        </nav>

        <div className='ml-auto flex items-center gap-5'>
          <form className='flex items-center' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Search here'
              className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
              onChange={(e) =>setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className='text-2xl text-white hidden lg:block'>
            <IoSearchOutline/>
            </button>
          </form>
          <div className='w-8 h-8 cursor-pointer active:scale-75 transition-all'>
            <img
              src={assets.profile_icon}
              alt='profile_icon'
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
