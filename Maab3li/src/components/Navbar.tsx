import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', goTo: '#home' },
    { id: 2, text: 'About&skills',goTo: '#about&skills' },
    { id: 3, text: 'Projects',goTo: '#projects' },
    { id: 4, text: 'Contact',goTo: '#contact' }
  ];

  return (
    <div className='fixed text-transparent bg-white/20 backdrop-blur-md flex justify-between items-center h-24 w-[100%] mx-auto px-4 text-white z-9999'>
      {/* Logo */}
      <p className='w-full text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#FDC700] via-[#FFFBEB] to-[]' style={{ textAlign:'start'}}>Maab Dev.</p>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 bg-clip-text text-transparent bg-linear-to-r from-[#FDC700] via-[#FFFBEB] to-[] text-xl font-bold hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden text-black'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'text-black fixed md:hidden grid grid-cols-2 grid-rows-2 left-0 top-0 w-[70%] h-max-content border-r border-r-yellow-100 bg-linear-to-r from-yellow-100 via-white to-yellow-100 text-black ease-in-out duration-500'
            : 'text-black ease-in-out w-[70%] duration-500 fixed top-0 bottom-0 text-black left-[-100%]'
        }
        style={{color:'black'}}
      >
        {/* Mobile Navigation Items */}
        {navItems.map(item => (
        <a href={item.goTo}>
          <li
            key={item.id}
            className='p-3 border-b text-white rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            style={{color:'black', fontWeight:'500'}}
          >
            {item.text}
          </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;