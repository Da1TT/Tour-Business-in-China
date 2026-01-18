import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

// Types for exhibition data
interface Exhibition {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  highlights: string[];
  image: string;
  registrationLink: string;
}

// Types for team member
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  languages: string[];
}

export default function Exhibitions() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Mock exhibition data
  const exhibitions: Exhibition[] = [
    {
      id: 1,
      title: "China Digital Entertainment Expo & Conference",
      date: "July 26-28, 2026",
      location: "Shanghai New International Expo Center",
      description: "Asia's largest digital entertainment exhibition featuring games, animation, e-sports, and digital content.",
      highlights: [
        "Game developers showcase latest releases",
        "E-sports tournaments with top teams worldwide",
        "Industry leaders sharing insights",
        "Networking opportunities with global professionals"
      ],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=China%20digital%20entertainment%20expo%2C%20gaming%20event&sign=a3971fd429410a00b529ae3b362f8499",
      registrationLink: "#"
    },
    {
      id: 2,
      title: "China International Industry Fair",
      date: "September 19-23, 2026",
      location: "National Exhibition and Convention Center, Shanghai",
      description: "Leading exhibition for industrial technology, automation, and intelligent manufacturing.",
      highlights: [
        "Industrial automation and robotics displays",
        "Smart manufacturing solutions",
        "5G and IoT applications in industry",
        "Opportunities for international collaboration"
      ],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=China%20international%20industry%20fair%2C%20technology%20exhibition&sign=e41bb82746c665fbccbb0523466195b2",
      registrationLink: "#"
    },
    {
      id: 3,
      title: "World Artificial Intelligence Conference",
      date: "August 29-31, 2026",
      location: "Shanghai World Expo Exhibition & Convention Center",
      description: "Global platform for AI innovation, research, and business collaboration.",
      highlights: [
        "Keynote speeches from AI pioneers",
        "Cutting-edge AI technology demonstrations",
        "AI application showcases across industries",
        "Investment and partnership opportunities"
      ],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=World%20Artificial%20Intelligence%20Conference%2C%20tech%20event&sign=2525739ada50d6fe1e934dd6c1596237",
      registrationLink: "#"
    },
    {
      id: 4,
      title: "China International Software & Information Service Fair",
      date: "June 15-17, 2026",
      location: "Dalian World Expo Center",
      description: "Major event for software development, information services, and digital transformation.",
      highlights: [
        "Software development tools and platforms",
        "Cloud computing and big data solutions",
        "Cybersecurity technologies",
        "Digital transformation case studies"
      ],
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Software%20and%20information%20service%20exhibition%2C%20China&sign=c30039d78b5815b5ec9ac16c96a08416",
      registrationLink: "#"
    }
  ];

  // Mock team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Emily Wang",
      role: "Exhibition Director",
      bio: "With over 10 years of experience in international exhibitions, Emily specializes in IT and technology events.",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Professional%20Chinese%20female%20businesswoman&sign=6b0d61508e6afec52fcf7b50feb7e966",
      languages: ["English", "Mandarin", "French"]
    },
    {
      id: 2,
      name: "David Zhang",
      role: "Senior Consultant",
      bio: "Former IT industry executive with deep knowledge of China's technology landscape and exhibition scene.",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Professional%20Chinese%20male%20businessman&sign=d289cf132b7b128c0a2d07e6922fac42",
      languages: ["English", "Mandarin", "Japanese"]
    },
    {
      id: 3,
      name: "Sarah Liu",
      role: "Client Relations Manager",
      bio: "Dedicated to providing exceptional service and ensuring clients have a successful exhibition experience.",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Professional%20Chinese%20female%20client%20manager&sign=32acee7adfb9326d437f56f3d86e7280",
      languages: ["English", "Mandarin", "Spanish"]
    }
  ];

  // Handle exhibition registration
  const handleRegistration = (exhibition: Exhibition) => {
    // In a real application, this would redirect to a registration form
    alert(`Registration process for ${exhibition.title} has been initiated!`);
  };

  // Service process steps
  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We discuss your needs, goals, and expectations for the exhibition."
    },
    {
      title: "Customized Planning",
      description: "Our team creates a tailored plan including logistics, scheduling, and support services."
    },
    {
      title: "On-site Support",
      description: "Our professional team provides on-site assistance throughout the exhibition."
    },
    {
      title: "Post-event Follow-up",
      description: "We gather feedback and provide a summary report to help evaluate your exhibition success."
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      {/* Page Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <span className="text-red-600 font-medium">{t("nav.exhibitions")}</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">China IT Exhibition Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive support for international businesses attending major IT exhibitions across China, with extensive experience in Beijing, Shanghai, Guangzhou, and other tech hubs.
        </p>
      </motion.div>

      {/* Upcoming Exhibitions */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Upcoming IT Exhibitions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the major IT and technology exhibitions in China for 2026
          </p>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {exhibitions.map((exhibition) => (
            <motion.div 
              key={exhibition.id}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={exhibition.image} 
                    alt={exhibition.title} 
                    className="h-64 md:h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center text-sm text-red-600 mb-3">
                    <i className="fa-solid fa-calendar-days mr-2"></i>
                    <span>{exhibition.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{exhibition.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <i className="fa-solid fa-location-dot mr-2"></i>
                    <span>{exhibition.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{exhibition.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Highlights:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {exhibition.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => handleRegistration(exhibition)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Exhibition Support Process */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto mb-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Our Exhibition Support Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end support to ensure your exhibition experience is successful
          </p>
        </div>
        
        <div className="relative">
          {/* Process steps */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`md:flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                  <h3 className="text-2xl font-bold mb-3">Step {index + 1}: {step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                
                <div className="md:w-1/2 mt-4 md:mt-0"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Our Team */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Meet Our Exhibition Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced professionals are ready to assist you with your exhibition needs
          </p>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-200">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Languages:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.languages.map((language, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-full text-sm transition-colors">
                  Contact
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto bg-red-600 rounded-2xl p-8 md:p-12 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Participate in China's IT Exhibitions?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let our expert team handle all the details so you can focus on your business objectives.
        </p>
        <button className="bg-white text-red-600 px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Request Exhibition Support
        </button>
      </motion.div>
    </div>
  );
}