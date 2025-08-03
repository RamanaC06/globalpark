import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Handshake, Users, Target, Award, TrendingUp, Globe, ArrowRight, CheckCircle, Star, Building } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Partnership: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo('.partnership-hero',
      { y: 100, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'back.out(1.7)' }
    );

    // Cards animation
    gsap.fromTo('.partnership-card',
      { y: 80, opacity: 0, rotation: -5 },
      {
        y: 0, opacity: 1, rotation: 0, duration: 1, stagger: 0.2, ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.partnership-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating animations
    gsap.to('.floating-element', {
      y: -20, duration: 3, ease: 'power2.inOut', yoyo: true, repeat: -1, stagger: 0.5
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      
        
        <div className="partnership-hero relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 text-black">Partnership</h1>
          <p className="text-2xl md:text-3xl opacity-90 leading-relaxed text-black">
            Building Strategic Alliances for Mutual Success
          </p>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Handshake className="w-4 h-4 mr-2" />
              Strategic Partnership Program
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Powerful
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Partnerships</span>
            <br />That Drive Success
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect with industry leaders, unlock new markets, and accelerate growth through our comprehensive partnership ecosystem designed for mutual prosperity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          
          </div>
        </div>
      </section>


      
      {/* Partnership Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Active Partners</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$500M+</div>
              <div className="text-gray-600">Combined Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership model that aligns with your business goals and growth strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Partners</h3>
              <p className="text-gray-600 mb-6">
                Integrate cutting-edge solutions and expand your technology stack through strategic tech partnerships.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  API Integration Support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Joint Development Programs
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Technical Co-Marketing
                </li>
              </ul>
              <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Channel Partners</h3>
              <p className="text-gray-600 mb-6">
                Expand your market reach through our extensive network of sales and distribution partners.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Sales Training & Support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Marketing Materials
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Competitive Commissions
                </li>
              </ul>
              <button className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Alliances</h3>
              <p className="text-gray-600 mb-6">
                Form long-term strategic relationships that create significant value for both organizations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Market Co-Development
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Joint Innovation Labs
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Executive Partnerships
                </li>
              </ul>
              <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Partner With Us?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join a thriving ecosystem of innovative companies and unlock unprecedented growth opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Target className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Expansion</h3>
                    <p className="text-gray-600">Access new markets and customer segments through our global network.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Shared Resources</h3>
                    <p className="text-gray-600">Leverage combined expertise, technology, and resources for faster growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Award className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Success</h3>
                    <p className="text-gray-600">Benefit from our track record of successful partnerships and proven methodologies.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Process</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                  <span className="text-gray-700">Initial Consultation & Assessment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                  <span className="text-gray-700">Strategic Alignment & Planning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                  <span className="text-gray-700">Partnership Agreement & Launch</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                  <span className="text-gray-700">Ongoing Support & Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
            <p className="text-xl text-gray-600">Success stories from our valued partnership ecosystem</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The partnership has been transformative for our business. We've seen 300% growth in just 18 months."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Chen</div>
                    <div className="text-gray-600 text-sm">CEO, TechFlow Solutions</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  

      {/* Partnership Content */}
      <section className="py-24 relative overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-16 h-16 bg-blue-200/30 rounded-full"></div>
        <div className="floating-element absolute bottom-20 right-10 w-20 h-20 bg-blue-300/20 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Why Partner With Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join forces with Global Park to unlock new opportunities, expand your reach, 
              and achieve unprecedented growth in today's competitive marketplace.
            </p>
          </div>

          <div className="partnership-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="partnership-card bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100 text-center hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Strategic Alliance</h3>
              <p className="text-gray-600">
                Form lasting partnerships that drive innovation and create mutual value for sustainable growth.
              </p>
            </div>

            <div className="partnership-card bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100 text-center hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Network</h3>
              <p className="text-gray-600">
                Access our extensive network of industry experts and professionals across multiple sectors.
              </p>
            </div>

            <div className="partnership-card bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100 text-center hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Shared Goals</h3>
              <p className="text-gray-600">
                Align objectives and work together towards common goals that benefit all stakeholders involved.
              </p>
            </div>

            <div className="partnership-card bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100 text-center hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Proven Success</h3>
              <p className="text-gray-600">
                Leverage our track record of successful partnerships and proven methodologies for guaranteed results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnership;