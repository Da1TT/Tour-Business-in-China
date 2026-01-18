import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function Home() {
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="font-sans">
      {/* Hero Section with Chinese Cultural Elements */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Beijing%20Forbidden%20City%2C%20Chinese%20architecture%2C%20traditional%20culture%2C%20tourism&sign=cb88457531ca0476bbbe3d8f01390159" 
          alt="Beijing Skyline" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
           className="mb-6"
          >
            <span className="inline-block border-2 border-white px-6 py-2 rounded-full text-sm font-medium tracking-wider">
              {t('welcome')}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl"
          >
            Professional Ground Services Across China
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl mb-8 max-w-2xl"
          >
            Discover the best of China with our expert tour guides and exhibition assistance services in Beijing and major cities nationwide
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/tours" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {t('hero.tours')}
            </Link>
            <Link to="/exhibitions" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-all">
              {t('hero.exhibitions')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-medium">{t('services.tagline')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{t('services.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('services.description')}</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-map-location-dot text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('services.tourGuide')}</h3>
              <p className="text-gray-600">{t('services.tourGuideDesc')}</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-building text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('services.exhibitionService')}</h3>
              <p className="text-gray-600">{t('services.exhibitionServiceDesc')}</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-calendar-check text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('services.customItinerary')}</h3>
              <p className="text-gray-600">{t('services.customItineraryDesc')}</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-hotel text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('services.accommodation')}</h3>
              <p className="text-gray-600">{t('services.accommodationDesc')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="text-red-600 font-medium">{t('featuredTours.tagline')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">{t('featuredTours.title')}</h2>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mt-4 md:mt-0"
            >
              <Link to="/tours" className="text-red-600 font-medium flex items-center">
                {t('featuredTours.viewAll')}
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Beijing%20Forbidden%20City%20and%20Tiananmen%20Square%2C%20historical%20cultural%20tour&sign=bbe233da432647ad12b50b290fac7703" 
                  alt="Historical and Cultural Tour" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-sm px-3 py-1 rounded-full">
                  {t('featuredTours.bestseller')}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                {t('featuredTours.historicalTitle')}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {t('featuredTours.historicalDesc')}
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xl font-bold text-red-600">${499}</span>
                  <span className="text-gray-500 text-sm"> / {t('featuredTours.perPerson')}</span>
                </div>
                <Link to="/tours" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition-colors">
                  {t('featuredTours.details')}
                </Link>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Beijing%20CBD%20skyline%2C%20modern%20architecture%2C%20China&sign=1d304d8218d67b5a2eff3eb90b5a92dc" 
                  alt="Modern City Tour" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                {t('featuredTours.modernTitle')}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {t('featuredTours.modernDesc')}
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xl font-bold text-red-600">${399}</span>
                  <span className="text-gray-500 text-sm"> / {t('featuredTours.perPerson')}</span>
                </div>
                <Link to="/tours" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition-colors">
                  {t('featuredTours.details')}
                </Link>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Summer%20Palace%20Beijing%2C%20royal%20garden%2C%20traditional%20Chinese%20architecture&sign=2317565ecaebef9aaca36e84ba711e74" 
                  alt="Royal Gardens Tour" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                {t('featuredTours.gardensTitle')}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {t('featuredTours.gardensDesc')}
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xl font-bold text-red-600">${449}</span>
                  <span className="text-gray-500 text-sm"> / {t('featuredTours.perPerson')}</span>
                </div>
                <Link to="/tours" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition-colors">
                  {t('featuredTours.details')}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Exhibition Services Section */}
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-medium">{t('exhibitionServices.tagline')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{t('exhibitionServices.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('exhibitionServices.description')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=China%20IT%20exhibition%2C%20technology%20show%2C%20international%20business%20people&sign=65c3ed349bcc046d4ad18a7763c1a737" 
                alt="China IT Exhibition" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="mb-6">
                <h3 className="text-2xl font-bold mb-4">{t('exhibitionServices.whyChooseUs.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white rounded-full p-2 mr-4 mt-1">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{t('exhibitionServices.whyChooseUs.professional')}</h4>
                      <p className="text-gray-600">{t('exhibitionServices.whyChooseUs.professionalDesc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white rounded-full p-2 mr-4 mt-1">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{t('exhibitionServices.whyChooseUs.languageSupport')}</h4>
                      <p className="text-gray-600">{t('exhibitionServices.whyChooseUs.languageSupportDesc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white rounded-full p-2 mr-4 mt-1">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{t('exhibitionServices.whyChooseUs.logistics')}</h4>
                      <p className="text-gray-600">{t('exhibitionServices.whyChooseUs.logisticsDesc')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <Link to="/exhibitions" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  {t('exhibitionServices.learnMore')}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-medium">{t('testimonials.tagline')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{t('testimonials.title')}</h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-yellow-400 mb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-gray-600 italic mb-6">"{t('testimonials.testimonial1')}"</p>
              <div className="flex items-center">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Caucasian%20male%20businessman%2C%20professional&sign=df30afd45389a9d7aa0008231403838f" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">John Smith</h4>
                  <p className="text-gray-500 text-sm">CEO, TechCorp Inc.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-yellow-400 mb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-gray-600 italic mb-6">"{t('testimonials.testimonial2')}"</p>
              <div className="flex items-center">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=European%20female%20tourist%2C%20happy&sign=c19d21f7d036e6389c6914866b3b86be" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Emma Johnson</h4>
                  <p className="text-gray-500 text-sm">Travel Blogger</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-yellow-400 mb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
              <p className="text-gray-600 italic mb-6">"{t('testimonials.testimonial3')}"</p>
              <div className="flex items-center">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Asian%20male%20businessman%2C%20professional&sign=5f8b153d75b3c985e35176285361cb8d" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-500 text-sm">CTO, Innovate Inc.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{t('cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-red-600 px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {t('cta.contactUs')}
              </Link>
              <Link to="/tours" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-all">
                {t('cta.exploreTours')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}