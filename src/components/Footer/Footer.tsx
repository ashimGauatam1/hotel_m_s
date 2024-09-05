import { Facebook, Twitter, Instagram, Mountain } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 w-screen h-full ">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <a href="#" className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300">
            <Mountain className="h-6 w-6 text-yellow-400" />
            <span className="text-lg font-bold tracking-tight">DaiKoHotel</span>
          </a>
          <p className="text-gray-300">
            Nestled in the heart of the city, DaiKoHotel offers a luxurious and comfortable stay for all our guests.
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold border-b-2 border-yellow-400 pb-2 mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <Link href="/staffpage" className='text-gray-400 hover:text-yellow-400 transition-colors duration-300'>Staff Page</Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold border-b-2 border-yellow-400 pb-2 mb-4">Policies</h4>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
            Terms of Service
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
            Cancellation Policy
          </a>
        </div>
        
        <div className="flex flex-col items-start gap-2">
          <p className="text-gray-400 text-sm border-t-2 border-gray-700 pt-4 mt-4">
            &copy; 2024 DaiKoHotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
