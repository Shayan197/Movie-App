import React from 'react'
import { mobileNavigation } from '../constants/navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-14 bg-black bg-opacity-50 fixed bottom-0 w-full z-40'>        
      <div className='flex justify-between items-center h-full text-neutral-400'>
        {
            mobileNavigation.map((nav,index)=>{
                return(
                    <NavLink key={nav.label+"mobilenavigation"}
                    to={nav.href}
                    className={({isActive})=>`px-3 flex flex-col items-center justify-center h-full ${isActive && "text-white"}`}>
                        <div className='text-2xl mb-1'>
                            {nav.icon}
                        </div>
                        <p className='text-sm'>{nav.label}</p>
                    </NavLink>
                )
            })
        }
      </div>
    </section>
  )
}

export default MobileNavigation
