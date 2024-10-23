"use client"
import Link from 'next/link'
import React from 'react'
import Typed from 'typed.js'



const Footer = () => {

  React.useEffect(() => {
    const options = {
      strings: ['<i>Web</i> Deveploper.', '&amp; TypeScript Expert.','Nextjs.'],
      typeSpeed: 50,
    };
    const typed = new Typed('#element', options);
    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="footer-section mb-6 md:mb-0">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p>Email:<Link href="mailto:rahatnafees4@gmail.com "className="text-blue-400 hover:underline">rahatnafees4@gmail.com</Link></p>
            <p>Phone:<span className='text-blue-400'></span> 03363495476</p>
            <p>Address:<span className='text-blue-400'></span> l-83 block 9 FB area; Karachi.</p>
        </div>
        <div className="footer-section mb-6 md-0">
            <h2 className='text-kl font-semibold'>Quick Links</h2>
            <ul className='list-none'>
                <li><Link href="#"className='text-blue-400 hover:underline'>Home</Link></li>
                <li><Link href="#"className='text-blue-400 hover:underline'>About</Link></li>
                <li><Link href="#"className='text-blue-400 hover:underline'>Services</Link></li>
                <li><Link href="#"className='text-blue-400 hover:underline'>Contact</Link></li>
            </ul>
        </div>
        <div className="footer-section">
            <h2 className='text-xl font-semibold'>Follow Us</h2>
            <div className="social-links flex space-x-4">
                <a href="#" className="text-blue-400 hover:underline">facebook</a>
                <a href="#" className="text-blue-400 hover:underline">github</a>
                <a href="#" className="text-blue-400 hover:underline">replit</a>
            </div>
        </div>
    </div>
    <div className="footer-botton text-center mt-8">
        <p>&copy; 2024 your company Name.All rights reserved.</p>
    </div>
    <div id='element' className='text-center mt-4'></div>
</footer>
</div>
  );
}

export default Footer
