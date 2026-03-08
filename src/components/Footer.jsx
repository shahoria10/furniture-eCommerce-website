import React from 'react' 
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-secondary-bg text-dark dark:bg-gray-800 dark:text-white pt-20 mt-5 pb-5">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8">
          {/* logo and details*/}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4"><Link  to="/">Panto</Link></h2>
            <p className="md:mr-12">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
          </div>
          {/* sevices */}
          <div>
            <h2 className="text-xl font-semibold md-4 ">Services</h2>
            <ul className=" space-y-2">
              
                <li><Link to="/" className="hover:text-primary">Email Marketing</Link></li>
                <li><Link to="/" className="hover:text-primary">Campaigns</Link></li>
                <li><Link to="/" className="hover:text-primary">Branding</Link></li>
              
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold md-4 ">Furniture</h2>
            <ul className="space-y-2">
              
                <li><Link to="/" className="hover:text-primary">Beds Marketing</Link> </li>
                <li><Link to="/" className="hover:text-primary">Chair</Link></li>
                <li><Link to="/" className="hover:text-primary">All</Link></li>
             
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold md-4 ">Follow Us</h2>
            <ul className="space-y-2">
              
               <li> <Link to="/" className="hover:text-primary flex items-center space-x-2"><FaFacebookSquare /> <span>Facebook</span></Link></li>

                <li><Link to="/" className="hover:text-primary flex items-center space-x-2"><FaTwitterSquare /><span>Facebook</span></Link></li>
                <li><Link to="/" className="hover:text-primary flex items-center space-x-2"><FaInstagramSquare /><span>Instagram</span></Link></li>
              
            </ul>
          </div>
      </div>
      
      {/* copy right */}
      <div className="mt-12 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-left  text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 pt-4">
        <p>Coppyright&copy;{new Date().getFullYear()} </p>
        <div className="flex items-center gap-4">
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;