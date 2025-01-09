'use client'

import React from 'react';
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

interface Product {
  name: string;
  description: string;
  url: string;
  logoSrc: string;
}

interface Social {
  icon: LucideIcon | typeof XIcon;
  url: string;
  label: string;
}

const WaveAnimation: React.FC = () => (
  <div className="absolute bottom-0 left-0 right-0 w-screen overflow-hidden">
    <svg 
      className="waves w-full h-48" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      viewBox="0 24 150 28" 
      preserveAspectRatio="none" 
      shapeRendering="auto"
    >
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(102, 137, 250,0.2)" className="animate-[wave_10s_linear_infinite]" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(96, 129, 235,0.3)" className="animate-[wave_13s_linear_infinite]" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(115, 146, 245,0.3)" className="animate-[wave_16s_linear_infinite]" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(99, 128, 224,0.4)" className="animate-[wave_19s_linear_infinite]" />
      </g>
    </svg>
  </div>
);

const RadialBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent">
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 35% 25%, rgba(102, 137, 250, 0.04) 0%, transparent 70%),
          radial-gradient(ellipse at 65% 35%, rgba(96, 129, 235, 0.03) 0%, transparent 65%),
          radial-gradient(circle at 50% 20%, rgba(115, 146, 245, 0.04) 0%, transparent 75%),
          radial-gradient(ellipse at 28% 38%, rgba(99, 128, 224, 0.05) 0%, transparent 60%),
          radial-gradient(circle at 75% 30%, rgba(102, 137, 250, 0.03) 0%, transparent 65%),
          radial-gradient(ellipse at 45% 25%, rgba(255, 255, 255, 0.95) 0%, transparent 55%),
          radial-gradient(circle at 65% 40%, rgba(255, 255, 255, 0.92) 0%, transparent 50%),
          radial-gradient(ellipse at 40% 35%, rgba(255, 255, 255, 0.9) 0%, transparent 60%),
          radial-gradient(circle at 55% 30%, rgba(255, 255, 255, 0.95) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 35%, rgba(255, 255, 255, 0.97) 0%, transparent 40%)
        `
      }} />
    </div>
  </div>
);

const CadmosHub: React.FC = () => {
  const products: Product[] = [
    {
      name: 'Cadmos Pay',
      description: 'Remittance and Investment',
      url: 'https://www.cadmospay.com',
      logoSrc: './cadmosPay.png'
    },
    {
      name: 'Cadmos Finance',
      description: 'Tokenized Asset Management',
      url: 'https://www.cadmos.finance',
      logoSrc: './cadmosFinance.png'
    }
  ];

  const socials: Social[] = [
    { icon: XIcon, url: 'https://twitter.com/CadmosIO', label: 'Follow us on X' },
    { icon: Github, url: 'https://github.com/Cadmos-finance', label: 'Check our Github' },
    { icon: Linkedin, url: 'https://www.linkedin.com/company/cadmosam', label: 'Connect on LinkedIn' },
    { icon: Instagram, url: 'https://www.instagram.com/cadmos.io', label: 'Follow us on Instagram' },
    { icon: Youtube, url: 'https://www.youtube.com/@CadmosIO', label: 'Watch on Youtube' }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-['Avenir_Next',system-ui,-apple-system,sans-serif]">
      <RadialBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Logo and Header */}
        <div className="text-center mb-16">
          <img
            src="./CADMOS-02-large.png"
            alt="Cadmos Logo"
            className="mx-auto mb-8 h-36 w-auto"
          />
          <p className="text-lg text-gray-600">Disintermediating capital markets and cross-border payments globally</p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.url}
              className="group block transform transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <div className="flex flex-col h-full items-stretch overflow-hidden rounded-xl bg-white p-8 transition-all duration-300 relative shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white via-white to-[#00146A]/5 rounded-xl" />
                <div className="flex items-center mb-6 relative">
                  <div className="flex items-center justify-center w-32 h-24 mr-6">
                    <img 
                      src={product.logoSrc}
                      alt={`${product.name} logo`}
                      className="max-h-24 w-auto object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-[#00146A]">{product.name}</h2>
                </div>
                <div className="flex-1 flex items-center relative">
                  <p className="text-gray-600 text-lg flex-1">{product.description}</p>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-[#00146A] transition-colors duration-200 ml-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
          {socials.map((social) => {
            const SocialIcon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00146A] transition-colors duration-200"
                aria-label={social.label}
                title={social.label}
              >
                <SocialIcon className="w-9 h-9" /> {/* Increased from w-6 h-6 */}
              </a>
            );
          })}
        </div>
      </div>

      {/* Wave Animation */}
      <WaveAnimation />
    </div>
  );
};

export default CadmosHub;