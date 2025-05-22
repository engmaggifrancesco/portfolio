import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from '../components/RouterContext';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light mb-12 tracking-tighter">ABOUT ME</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img 
              src="/data/images/siyangjiang portfolio.JPG" 
              alt="Siyang Jiang" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xl mb-8 leading-relaxed text-gray-300">
              Hello! I'm Siyang Jiang, a creative designer with a focus on UI/UX design and 3D visual advertising, known for a strong sensitivity to brand identity and its expression across various media. My background includes experience designing impactful advertisements for fashion and furniture brands, creating visuals that resonate with a diverse audience.</p>
              
              <p className="mb-8 leading-relaxed text-gray-400">
              Beyond my core skills in design, I'm also expanding my expertise in VR and AR technologies, with hands-on experience in coding to bring interactive, immersive experiences to life. This blend of creativity and technical knowledge allows me to develop innovative solutions that push the boundaries of digital interaction.</p>
              
              <p className="mb-12 leading-relaxed text-gray-400">
              Thank you for taking the time to explore my work—I look forward to sharing my journey and skills with you!</p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-medium mb-2">EXPERTISE</h3>
              <div className="flex flex-wrap gap-2">
                {['3D Modeling', 'Animation', 'Virtual Worlds', 'Motion Design', 'Visual Effects', 'Art Direction'].map(skill => (
                  <span key={skill} className="text-sm px-3 py-1 border border-gray-700 text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={() => navigate('projects')}
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mt-8"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;