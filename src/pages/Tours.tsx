import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

// Types for tour data
interface Tour {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  highlights: string[];
  itinerary: {
    day: string;
    activities: string[];
  }[];
  category: string;
}

export default function Tours() {
  const { t } = useLanguage();
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

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

  // Mock tour data
  const tours: Tour[] = [
    {
      id: 1,
      title: t("featuredTours.historicalTitle"),
      description: t("featuredTours.historicalDesc"),
      price: 499,
      duration: "Full Day",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Beijing%20Forbidden%20City%20and%20Tiananmen%20Square%2C%20historical%20cultural%20tour&sign=bbe233da432647ad12b50b290fac7703",
      highlights: [
        "Visit the magnificent Forbidden City",
        "Explore Tiananmen Square",
        "Discover the ancient Temple of Heaven",
        "Experience traditional Chinese culture"
      ],
      itinerary: [
        {
          day: "Day 1",
          activities: [
            "Morning: Pick up from hotel",
            "Visit Tiananmen Square",
            "Explore the Forbidden City",
            "Lunch at local restaurant",
            "Afternoon: Visit Temple of Heaven",
            "Evening: Return to hotel"
          ]
        }
      ],
      category: "historical"
    },
    {
      id: 2,
      title: t("featuredTours.modernTitle"),
      description: t("featuredTours.modernDesc"),
      price: 399,
      duration: "Full Day",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Beijing%20CBD%20skyline%2C%20modern%20architecture%2C%20China&sign=1d304d8218d67b5a2eff3eb90b5a92dc",
      highlights: [
        "Visit the Olympic Park and Bird's Nest Stadium",
        "Enjoy panoramic views from CCTV Tower",
        "Experience vibrant shopping districts",
        "See modern Beijing's development"
      ],
      itinerary: [
        {
          day: "Day 1",
          activities: [
            "Morning: Pick up from hotel",
            "Visit Olympic Park and Bird's Nest",
            "Lunch at modern restaurant",
            "Afternoon: Visit CCTV Tower",
            "Explore Sanlitun shopping district",
            "Evening: Return to hotel"
          ]
        }
      ],
      category: "modern"
    },
    {
      id: 3,
      title: t("featuredTours.gardensTitle"),
      description: t("featuredTours.gardensDesc"),
      price: 449,
      duration: "Full Day",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Summer%20Palace%20Beijing%2C%20royal%20garden%2C%20traditional%20Chinese%20architecture&sign=2317565ecaebef9aaca36e84ba711e74",
      highlights: [
        "Explore the magnificent Summer Palace",
        "Visit the ruins of Yuanmingyuan",
        "Enjoy traditional Chinese garden architecture",
        "Experience peaceful lakeside scenery"
      ],
      itinerary: [
        {
          day: "Day 1",
          activities: [
            "Morning: Pick up from hotel",
            "Visit Summer Palace",
            "Lunch at lakeside restaurant",
            "Afternoon: Explore Yuanmingyuan",
            "Evening: Return to hotel"
          ]
        }
      ],
      category: "gardens"
    },
    {
      id: 4,
      title: "Beijing Hutong Tour",
      description: "Explore Beijing's traditional alleyways and experience local life in the old city.",
      price: 349,
      duration: "Half Day",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Beijing%20Hutong%20traditional%20alleys%2C%20local%20life&sign=0ea5eec4866d68c993988b58eaa7a647",
      highlights: [
        "Explore narrow hutong alleyways",
        "Visit local courtyard homes",
        "Try traditional snacks",
        "Ride a rickshaw through the old city"
      ],
      itinerary: [
        {
          day: "Day 1",
          activities: [
            "Afternoon: Pick up from hotel",
            "Explore Nanluoguxiang hutong",
            "Visit a traditional courtyard home",
            "Ride a rickshaw",
            "Try local snacks",
            "Evening: Return to hotel"
          ]
        }
      ],
      category: "cultural"
    },
    {
      id: 5,
      title: "Great Wall of China Tour",
      description: "Visit the magnificent Great Wall of China, one of the Seven Wonders of the World.",
      price: 549,
      duration: "Full Day",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Great%20Wall%20of%20China%2C%20Mutianyu%20section%2C%20scenic%20view&sign=93138279c35e7e17e981e6beb4b0fc9a",
      highlights: [
        "Visit Mutianyu section of the Great Wall",
        "Enjoy breathtaking mountain views",
        "Experience cable car ride",
        "Learn about the wall's history"
      ],
      itinerary: [
        {
          day: "Day 1",
          activities: [
            "Morning: Early pick up from hotel",
            "Drive to Mutianyu Great Wall",
            "Hike along the Great Wall",
            "Lunch at local restaurant",
            "Afternoon: Optional toboggan ride",
            "Evening: Return to Beijing"
          ]
        }
      ],
      category: "historical"
    },
    {
      id: 6,
      title: "Shanghai Modern City Tour",
      description: "Experience the dynamic metropolis of Shanghai with its iconic skyline, historic waterfront, and vibrant culture.",
      price: 599,
      duration: "Full Day",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Shanghai%20skyline%2C%20The%20Bund%2C%20modern%20city%20China&sign=e50b262adb16da85a54b7a0bfd28ddd8",
      highlights: [
        "Visit The Bund waterfront area",
        "Experience Shanghai Tower observation deck",
        "Explore Yuyuan Garden and Bazaar",
        "Discover the French Concession"
      ],
      itinerary: [
        {
          day: "Day 1",
          activities: [
            "Morning: Pick up from hotel",
            "Visit The Bund and Huangpu River",
            "Lunch at local restaurant",
            "Afternoon: Shanghai Tower and financial district",
            "Explore Yuyuan Garden",
            "Evening: Return to hotel"
          ]
        }
      ],
      category: "modern"
    },
    {
      id: 7,
      title: "Xi'an Terracotta Warriors Tour",
      description: "Journey to Xi'an to witness the ancient Terracotta Army, one of the most significant archaeological discoveries of the 20th century.",
      price: 699,
      duration: "2 Days",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Terracotta%20Warriors%20in%20Xi%27an%2C%20China&sign=3fbfe51501f02ee37f3c36d5549baed8",
      highlights: [
        "Visit the world-famous Terracotta Army",
        "Explore the Ancient City Wall of Xi'an",
        "Experience Muslim Quarter and local cuisine",
        "Learn about China's ancient history"
      ],
      itinerary: [
        {
          day: "Day 1",
          activities: [
            "Morning: Arrive in Xi'an",
            "Visit Terracotta Warriors Museum",
            "Lunch at local restaurant",
            "Afternoon: Qin Shi Huang Mausoleum",
            "Evening: Free time in Muslim Quarter"
          ]
        },
        {
          day: "Day 2",
          activities: [
            "Morning: Ancient City Wall",
            "Visit Shaanxi History Museum",
            "Lunch at local restaurant",
            "Afternoon: Departure"
          ]
        }
      ],
      category: "historical"
    }
  ];

  // Filter tours by category
  const filteredTours = activeCategory === "all" 
    ? tours 
    : tours.filter(tour => tour.category === activeCategory);

  // Handle tour selection for details
  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
  };

  // Handle booking
  const handleBooking = (tour: Tour) => {
    // In a real application, this would open a booking form or redirect to a booking page
    alert(`Booking for ${tour.title} has been initiated!`);
  };

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
        <span className="text-red-600 font-medium">{t("nav.tours")}</span>
         <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Discover China's Best Tours</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our carefully curated selection of tours designed to showcase the best of China's history, culture, and modern attractions, with a focus on Beijing and major destinations nationwide.
        </p>
      </motion.div>

      {/* Tour Categories */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto mb-12"
      >
        <div className="flex flex-wrap justify-center gap-2">
          {["all", "historical", "modern", "gardens", "cultural"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-red-600 text-white font-medium"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tour Listings */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredTours.map((tour) => (
          <motion.div 
            key={tour.id}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden h-60">
              <img 
                src={tour.image} 
                alt={tour.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white text-sm px-3 py-1 rounded-full">
                ${tour.price}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors">
                  {tour.title}
                </h3>
                <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                  {tour.duration}
                </span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {tour.description}
              </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleTourSelect(tour)}
                  className="text-red-600 font-medium hover:underline"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleBooking(tour)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Custom Tour Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto mt-20 bg-red-50 rounded-2xl p-8 md:p-12"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Customize Your Perfect Beijing Experience</h2>
            <p className="text-gray-600 mb-6">
              Can't find exactly what you're looking for? Our expert team can create a personalized itinerary tailored to your interests, schedule, and preferences.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Request Custom Tour
            </button>
          </div>
          <div className="md:w-1/3">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Custom%20travel%20planning%2C%20map%20and%20itinerary&sign=8e8d53b0f380c33e176a061567bcceac" 
              alt="Custom Tour Planning"className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}