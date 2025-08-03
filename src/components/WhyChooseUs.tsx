import React, { useEffect, useRef } from 'react';
import { Shield, Zap, Users, Award, Target, Globe2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Reliable & Secure',
    description: 'Enterprise-grade security and reliability you can trust for your critical business operations.'
  },
  {
    icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Cutting-Edge Technology',
    description: 'Stay ahead with the latest innovations in AI, software development, and digital solutions.'
  },
  {
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Expert Team',
    description: 'Work with seasoned professionals who bring years of industry experience to your projects.'
  },
  {
    icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Proven Track Record',
    description: 'Hundreds of successful projects and satisfied clients across various industries worldwide.'
  },
  {
    icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable results that directly impact your business growth and success.'
  },
  {
    icon: <Globe2 className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Global Reach',
    description: 'Expand your business internationally with our comprehensive export and trade solutions.'
  }
];

const WhyChooseUs: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    // Desktop/Tablet animations
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(headingRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(descriptionRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.feature-card',
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Mobile animations
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(headingRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(descriptionRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.feature-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <div ref={headingRef}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
              Why Choose Us
            </h2>
            <div className="w-16 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 sm:mb-8"></div>
          </div>
          <div ref={descriptionRef}>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Global Park, we combine innovation with reliability to deliver exceptional results. 
              Our commitment to excellence, cutting-edge technology solutions, and personalized service 
              makes us the ideal partner for your business growth. We don't just provide services; 
              we build lasting relationships that drive success in an ever-evolving global marketplace.
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
