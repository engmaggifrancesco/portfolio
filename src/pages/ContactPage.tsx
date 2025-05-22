import React from 'react';
import { Instagram, Twitter, Mail, Linkedin, MapPin, Globe, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light mb-12 tracking-tighter">GET IN TOUCH</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl mb-8 leading-relaxed text-gray-300">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <Mail size={24} className="mr-4 mt-1 text-gray-400" />
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Email</h3>
                  <a href="mailto:hello@siyangjiang.com" className="text-lg hover:text-gray-400 transition-colors duration-300">
                    jiangsiyang7@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={24} className="mr-4 mt-1 text-gray-400" />
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Based in</h3>
                  <p className="text-lg">Milan, Italy</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="mr-4 mt-1 text-gray-400" />
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Phone</h3>
                  <a href="tel:+44123456789" className="text-lg hover:text-gray-400 transition-colors duration-300">
                    +44 123 456 789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Globe size={24} className="mr-4 mt-1 text-gray-400" />
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Website</h3>
                  <a href="https://siyangjiang.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-400 transition-colors duration-300">
                    siyangjiang.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-tighter">Connect with me</h2>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <a href="#" className="flex flex-col items-center p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors duration-300">
                <Instagram size={32} className="mb-4" />
                <h3 className="text-lg mb-1">Instagram</h3>
                <p className="text-gray-500 text-sm">@siyangjiang</p>
              </a>
              
              <a href="#" className="flex flex-col items-center p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors duration-300">
                <Twitter size={32} className="mb-4" />
                <h3 className="text-lg mb-1">Twitter</h3>
                <p className="text-gray-500 text-sm">@siyangjiang</p>
              </a>
              
              <a href="#" className="flex flex-col items-center p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors duration-300">
                <Linkedin size={32} className="mb-4" />
                <h3 className="text-lg mb-1">LinkedIn</h3>
                <p className="text-gray-500 text-sm">Siyang Jiang</p>
              </a>
              
              <a href="mailto:hello@siyangjiang.com" className="flex flex-col items-center p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors duration-300">
                <Mail size={32} className="mb-4" />
                <h3 className="text-lg mb-1">Email</h3>
                <p className="text-gray-500 text-sm">hello@siyangjiang.com</p>
              </a>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;