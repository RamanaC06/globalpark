import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Smartphone, Brain, Cpu, Ship, Package, Globe as GlobeIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const softwareRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animations
    gsap.fromTo('.hero-title',
      { y: 100, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'back.out(1.7)' }
    );

    // Software Development Section
    gsap.fromTo('.software-hero',
      { y: 80, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: softwareRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.web-dev-content',
      { x: -100, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'power2.out',
        scrollTrigger: {
          trigger: '.web-dev-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.app-dev-content',
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: {
          trigger: '.app-dev-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // AI Training Section
    gsap.fromTo('.ai-hero',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: aiRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.ai-content',
      { y: 80, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ai-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.ml-content',
      { x: 100, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ml-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Export Section
    gsap.fromTo('.export-hero',
      { y: -80, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: exportRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.export-card',
      { scale: 0.8, opacity: 0, rotation: -5 },
      {
        scale: 1, opacity: 1, rotation: 0, duration: 1, stagger: 0.2, ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.export-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating animations
    gsap.to('.floating-element', {
      y: -20, duration: 3, ease: 'power2.inOut', yoyo: true, repeat: -1, stagger: 0.5
    });

    // Parallax effect for background elements
    gsap.to('.parallax-bg', {
      y: -50, ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        
        <div className="hero-title relative z-10 text-center text-white">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 text-black">Our Services</h1>
          <p className="text-2xl md:text-3xl opacity-90 text-black">Innovative Solutions for Modern Businesses</p>
        </div>
      </section>

      {/* Software Development Section */}
      <section ref={softwareRef} className="py-24 relative overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-16 h-16 bg-blue-200/30 rounded-full"></div>
        
        {/* Main Heading with Background */}
        <div className="relative h-96 flex items-center justify-center mb-20 overflow-hidden rounded-3xl mx-4 md:mx-8">
          <img 
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600"
            alt="Software Development"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <h2 className="software-hero relative z-10 text-6xl md:text-7xl font-bold text-white text-center">
            Software Development
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Web Development Subsection */}
          <div className="web-dev-section mb-20">
            <h3 className="web-dev-content text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
              Web Development
            </h3>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="web-dev-content">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100">
                  <div className="flex items-center mb-6">
                    <Code className="w-8 h-8 text-blue-500 mr-3" />
                    <h4 className="text-2xl font-bold text-gray-800">Modern Web Solutions</h4>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We create stunning, responsive websites and web applications using the latest technologies. 
                    Our team specializes in React, Vue, Angular, and modern JavaScript frameworks to deliver 
                    fast, scalable, and user-friendly web experiences. From simple landing pages to complex 
                    enterprise applications, we ensure your web presence stands out in today's digital landscape.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-gray-600">Web Projects</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">99%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="web-dev-content">
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                  alt="Web Development"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Application Development Subsection */}
          <div className="app-dev-section">
            <h3 className="app-dev-content text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
              Application Development
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <img 
                src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Mobile App Development"
                className="app-dev-content w-full h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Desktop Application"
                className="app-dev-content w-full h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="app-dev-content bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100">
              <div className="flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-blue-500 mr-3" />
                <h4 className="text-2xl font-bold text-gray-800">Cross-Platform Applications</h4>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                Our application development services cover mobile apps, desktop software, and cross-platform solutions. 
                We use cutting-edge technologies like React Native, Flutter, and Electron to create applications that 
                work seamlessly across all devices. Whether you need a mobile app for iOS and Android or a desktop 
                application for Windows, Mac, and Linux, we deliver high-performance solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Training Section */}
      <section ref={aiRef} className="py-24 relative overflow-hidden">
        <div className="floating-element absolute top-20 right-10 w-20 h-20 bg-blue-300/20 rounded-full"></div>
        
        {/* Main Heading with Background */}
        <div className="relative h-96 flex items-center justify-center mb-20 overflow-hidden rounded-3xl mx-4 md:mx-8">
          <img 
            src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600"
            alt="AI Training"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <h2 className="ai-hero relative z-10 text-6xl md:text-7xl font-bold text-white text-center">
            AI Training
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Artificial Intelligence Subsection */}
          <div className="ai-section mb-20">
            <h3 className="ai-content text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
              Artificial Intelligence
            </h3>
            <div className="text-center mb-12">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Artificial Intelligence"
                className="ai-content w-full max-w-2xl mx-auto h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="ai-content bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100">
              <div className="flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-500 mr-3" />
                <h4 className="text-2xl font-bold text-gray-800">Advanced AI Solutions</h4>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                Our artificial intelligence services encompass the full spectrum of AI development and implementation. 
                We specialize in natural language processing, computer vision, predictive analytics, and intelligent 
                automation. Our team of AI experts works closely with your business to identify opportunities where 
                AI can drive efficiency, reduce costs, and create new revenue streams. From chatbots to complex 
                decision-making systems, we bring the power of AI to your organization.
              </p>
            </div>
          </div>

          {/* Machine Learning Subsection */}
          <div className="ml-section">
            <div className="text-center mb-12">
              <img 
                src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Machine Learning"
                className="ml-content w-full max-w-2xl mx-auto h-80 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="ml-content text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
              Machine Learning Programs
            </h3>
            <div className="ml-content bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100">
              <div className="flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-blue-500 mr-3" />
                <h4 className="text-2xl font-bold text-gray-800">Custom ML Models</h4>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                We develop custom machine learning models tailored to your specific business needs. Our expertise 
                includes supervised and unsupervised learning, deep learning, neural networks, and reinforcement 
                learning. We help you harness the power of your data to make intelligent predictions, automate 
                complex processes, and gain valuable insights that drive business growth and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exporting Goods Section */}
      <section ref={exportRef} className="py-24 relative overflow-hidden">
        <div className="floating-element absolute bottom-20 left-10 w-24 h-24 bg-blue-400/20 rounded-full"></div>
        
        {/* Main Heading with Background */}
        <div className="relative h-96 flex items-center justify-center mb-20 overflow-hidden rounded-3xl mx-4 md:mx-8">
          <img 
            src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600"
            alt="Exporting Goods"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <h2 className="export-hero relative z-10 text-6xl md:text-7xl font-bold text-white text-center">
            Exporting Goods
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="export-grid grid md:grid-cols-3 gap-8">
            {/* Global Trade */}
            <div className="export-card bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100 text-center hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                alt="Global Trade"
                className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg"
              />
              <div className="flex items-center justify-center mb-4">
                <GlobeIcon className="w-6 h-6 text-blue-500 mr-2" />
                <h4 className="text-xl font-bold text-gray-800">Global Trade Solutions</h4>
              </div>
              <p className="text-gray-600">
                Comprehensive international trade services connecting your business to global markets with expertise and reliability.
              </p>
            </div>

            {/* Logistics */}
            <div className="export-card bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100 text-center hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                alt="Logistics"
                className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg"
              />
              <div className="flex items-center justify-center mb-4">
                <Ship className="w-6 h-6 text-blue-500 mr-2" />
                <h4 className="text-xl font-bold text-gray-800">Logistics & Shipping</h4>
              </div>
              <p className="text-gray-600">
                Efficient logistics management and shipping solutions ensuring your products reach destinations safely and on time.
              </p>
            </div>

            {/* Supply Chain */}
            <div className="export-card bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100 text-center hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                alt="Supply Chain"
                className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg"
              />
              <div className="flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-blue-500 mr-2" />
                <h4 className="text-xl font-bold text-gray-800">Supply Chain Management</h4>
              </div>
              <p className="text-gray-600">
                Streamlined supply chain optimization and management services to maximize efficiency and minimize costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;