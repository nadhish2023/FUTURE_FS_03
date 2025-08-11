'use client';

import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = {
  facebook: 'https://www.facebook.com/BMW/',
  x_twitter: 'https://x.com/BMW',
  instagram: 'https://www.instagram.com/bmw/',
  youtube: 'https://www.youtube.com/user/BMW',
};

const Footer = () => {
  return (
    <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Nadhish. All Rights Reserved. <br />
          <strong>This is a conceptual portfolio project. It is not affiliated with, nor endorsed by, BMW AG.</strong>
        </div>

        <div className="flex space-x-6">
          <a 
            href={socialLinks.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="BMW on Facebook"
            className="text-gray-400 hover:text-bmw-light-blue transition-colors duration-300"
          >
            <FaFacebookF size={20} />
          </a>
          
          <a 
            href={socialLinks.x_twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="BMW on X"
            className="text-gray-400 hover:text-bmw-light-blue transition-colors duration-300"
          >
            <FaXTwitter size={20} />
          </a>

          <a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="BMW on Instagram"
            className="text-gray-400 hover:text-bmw-light-blue transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a 
            href={socialLinks.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="BMW on YouTube"
            className="text-gray-400 hover:text-bmw-light-blue transition-colors duration-300"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;