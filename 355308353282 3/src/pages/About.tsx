import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

// Types for company history
interface TimelineItem {
  year: string;
  event: string;
}

export default function About() {
  const { t } = useLanguage();
  
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

  // Company history timeline
  const timeline: TimelineItem[] = [
    { year: "2010", event: "Company founded with focus on providing tour guide services" },
    { year: "2013", event: "Expanded to include exhibition support services" },
    { year: "2016", event: "Achieved 10,000+ satisfied clients from 20+ countries" },
    { year: "2019", event: "Opened branch offices in Shanghai and Guangzhou" },
    { year: "2023", event: "Launched customized business travel solutions" },
    { year: "2026", event: "Continuing to innovate and expand our services" }
  ];

  // Core values
  const coreValues = [
    {
      title: "Professionalism",
      description: "We maintain the highest standards of expertise and service quality",
      icon: "fa-award"
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical business practices",
      icon: "fa-shield-alt"
    },
    {
      title: "Customer Focus",
      description: "We prioritize our clients' needs and strive to exceed their expectations",
      icon: "fa-heart"
    },
    {
      title: "Cultural Understanding",
      description: "We bridge cultural gaps to ensure smooth cross-cultural experiences",
      icon: "fa-globe"
    }
  ];

  // Team members (simplified)
  const teamMembers = [
    {
      name: "Michael Johnson",
      position: "Founder & CEO",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Professional%20businessman%2C%20CEO&sign=1b66ce95ceaaa268a84a9ebd0e4e5691"
    },
    {
      name: "Sophie Chen",
      position: "Operations Director",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Professional%20businesswoman%2C%20operations%20director&sign=7dc71e5a8107f0e48b3f364204d44fcb"
    },
    {
      name: "Robert Zhang",
      position: "Tour Director",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Professional%20tour%20director&sign=094c05cda94a2e35f13c8c5bb5faec21"
    },
    {
      name: "Linda Wang",
      position: "Exhibition Services Manager",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Professional%20exhibition%20manager&sign=82c5fe30d8181fbaa0ebeb29e4c10339"
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
        <span className="text-red-600 font-medium">{t("nav.about")}</span>
         <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">About Tour & Business in China</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are a professional ground services provider dedicated to helping international visitors make the most of their time in China, with a focus on Beijing and major destinations nationwide.
        </p>
      </motion.div>

      {/* Company Overview */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
             <p className="text-gray-600 mb-4">
              Founded in 2010, Tour & Business in China started with a simple mission: to provide exceptional tour guide services to international visitors coming to China. Over the years, we have grown and expanded our services to include comprehensive exhibition support, customized travel solutions, and business assistance across major Chinese cities.
            </p>
            <p className="text-gray-600 mb-4">
              With a team of experienced professionals who are fluent in multiple languages and deeply knowledgeable about Chinese culture and business practices, we have successfully served thousands of clients from around the world.
            </p>
            <p className="text-gray-600">
              Our commitment to excellence and customer satisfaction has made us a trusted partner for individuals, businesses, and organizations seeking to navigate China's rich cultural landscape and dynamic business environment in Beijing and beyond.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Tour%20guide%20with%20group%20of%20tourists%2C%20Beijing&sign=3f1a05cbaf1cacf7ad6c57570a295803" 
                alt="Tour Guide" 
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Business%20meeting%2C%20international%20negotiation%2C%20China&sign=e318f5c27c1f99d6d051ecdf4db55b9f" 
                alt="Business Meeting" 
                className="rounded-xl shadow-lg w-full h-80 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Company Timeline */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A timeline of our company's growth and achievements
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-red-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`md:flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                  <h3 className="text-2xl font-bold text-red-600 mb-2">{item.year}</h3>
                  <p className="text-gray-600">{item.event}</p>
                </div>
                
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-red-600"></div>
                </div>
                
                <div className="md:w-1/2 mt-4 md:mt-0"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Core Values */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto mb-20 bg-gray-50 rounded-2xl p-8 md:p-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {coreValues.map((value, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`fa-solid ${value.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
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
          <h2 className="text-3xl font-bold mb-2">Our Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals who lead our company
          </p>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-red-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Choose Tour & Business in China?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-users text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p>Our professional guides and consultants have extensive knowledge and experience in their fields.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-language text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Multilingual Support</h3>
              <p>We offer services in multiple languages to ensure clear communication and understanding.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-star text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Exceptional Service</h3>
              <p>We go above and beyond to ensure our clients have a memorable and successful experience.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}