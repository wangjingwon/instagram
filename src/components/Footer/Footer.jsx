import React from 'react';
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <div className='flex justify-center items-center h-10'>
      <p className='flex items-center gap-1'>
        Made with <FaHeart className='text-red-500' /> in Seoul
      </p>
    </div>
  );
}

export default Footer;
