import React, { useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Responsive animation setup using gsap.matchMedia
    let mm = gsap.matchMedia();

    // For desktop and tablet
    mm.add("(min-width: 768px)", () => {
      // Floating animation for logo
      gsap.to(logoRef.current, {
        y: -25,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      });

      // Content scroll animation from right
      gsap.fromTo(contentRef.current,
        { x: 120, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // For mobile
    mm.add("(max-width: 767px)", () => {
      // Reduced floating animation for mobile
      gsap.to(logoRef.current, {
        y: -10,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      });

      // Content scroll animation from bottom on mobile
      gsap.fromTo(contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Common animations for all devices
    // Heading animation
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

    // Logo entrance animation
    gsap.fromTo(logoRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: logoRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => mm.revert(); // Cleanup
  }, []);

  // Logo section - easy to replace
  const LogoSection = () => (
    <div ref={logoRef} >
      <img
        src="/images/logo.png"
        alt="Global Park Logo"
        
      />
      {/* Decorative elements */}
      
      
    </div>
  );

  return (
    <section id="about" className="py-10 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
            Who We Are
          </h2>
          <div className="w-16 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Floating Logo */}
          <div className="flex justify-center order-1 lg:order-1">
            <LogoSection />
          </div>

          {/* Content */}
          <div ref={contentRef} className="order-2 lg:order-2">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                Global Park is a pioneering company at the forefront of technological innovation and global trade. 
                We specialize in delivering comprehensive solutions that bridge the gap between cutting-edge technology 
                and practical business applications.
              </p>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                Our expertise spans across software development, artificial intelligence training, and international 
                export services. We are committed to helping businesses scale globally while leveraging the latest 
                technological advancements to stay competitive in today's dynamic market.
              </p>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                With a team of dedicated professionals and years of industry experience, Global Park has established 
                itself as a trusted partner for businesses looking to expand their horizons and achieve sustainable growth.
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
                <div className="text-center p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600 text-sm sm:text-base">Years Experience</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600 text-sm sm:text-base">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
