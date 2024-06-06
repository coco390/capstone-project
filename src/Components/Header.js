import React from 'react'
import logo from '../Images/Logo.svg'

const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
          <img src={logo} alt="Logo" />
      </div>
    </header>
  )
}

export default Header;