// Translation file for English and Chinese

interface Translation {
  [key: string]: string | Translation;
}

interface Translations {
  en: Translation;
  zh: Translation;
}

const translations: Translations = {
  en: {
    welcome: "WELCOME TO CHINA",
    hero: {
      title: "Professional Ground Services for International Visitors",
      subtitle: "Discover the best of China with our expert tour guides and exhibition assistance services",
      tours: "Explore Tours",
      exhibitions: "View Exhibitions"
    },
    services: {
      tagline: "OUR SERVICES",
      title: "Comprehensive Solutions for Your Stay in China",
      description: "We provide all the support you need to make your visit to China memorable and successful",
      tourGuide: "Professional Tour Guide",
      tourGuideDesc: "Expert guides with deep knowledge of Chinese history and culture in Beijing and major cities",
      exhibitionService: "Exhibition Support",
      exhibitionServiceDesc: "Complete assistance for IT exhibitions across China",
      customItinerary: "Custom Itineraries",
      customItineraryDesc: "Personalized travel plans tailored to your interests and needs",
      accommodation: "Premium Accommodation",
      accommodationDesc: "Arrangement of comfortable and convenient stays"
    },
    featuredTours: {
      tagline: "POPULAR TOURS",
      title: "Discover China's Best",
      viewAll: "View All Tours",
      bestseller: "BESTSELLER",
      historicalTitle: "Historical & Cultural Tour",
      historicalDesc: "Explore Beijing's iconic landmarks including the Forbidden City, Tiananmen Square, and Temple of Heaven",
      modernTitle: "Modern City Tour",
      modernDesc: "Experience contemporary Beijing with visits to the Olympic Park, CCTV Tower, and vibrant shopping districts",
      gardensTitle: "Royal Gardens Tour",
      gardensDesc: "Visit exquisite imperial gardens such as the Summer Palace and Yuanmingyuan",
      perPerson: "per person",
      details: "View Details"
    },
    exhibitionServices: {
      tagline: "EXHIBITION SUPPORT",
      title: "Your Partner for China's IT Exhibitions",
      description: "We help international businesses navigate China's major technology exhibitions with professional assistance",
      whyChooseUs: {
        title: "Why Choose Our Exhibition Services?",
        professional: "Industry Expertise",
        professionalDesc: "Our team has extensive experience in China's IT exhibition scene",
        languageSupport: "Multilingual Support",
        languageSupportDesc: "Fluency in English, Chinese, and other major languages",
        logistics: "Full Logistics Support",
        logisticsDesc: "From visa assistance to transportation and accommodation"
      },
      learnMore: "Learn More About Exhibition Services"
    },
    testimonials: {
      tagline: "CLIENT EXPERIENCES",
      title: "What Our Clients Say",
      testimonial1: "The tour guide was exceptional - knowledgeable, friendly, and professional. Made our trip to Beijing truly memorable!",
      testimonial2: "Their exhibition support services were invaluable. We wouldn't have been able to navigate the show without them.",
      testimonial3: "From airport pickup to tour arrangements, everything was handled seamlessly. Highly recommended for business travelers."
    },
    cta: {
      title: "Ready to Experience the Best of Beijing?",
      subtitle: "Contact us today to start planning your perfect itinerary or exhibition visit",
      contactUs: "Contact Us",
      exploreTours: "Explore Tours"
    },
    nav: {
      home: "Home",
      tours: "Tours",
      exhibitions: "Exhibitions",
      about: "About Us",
      contact: "Contact"
    },
    footer: {
      contactInfo: "Contact Information",
      address: "123 Tiananmen Square, Beijing, China",
      phone: "+86 10 1234 5678",
      email: "info@beijinggroundservices.com",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      copyright: "© 2026 Beijing Ground Services. All rights reserved."
    },
    consultation: {
      title: "Need Assistance?",
      message: "Chat with our team for immediate help"
    }
  },
  zh: {
    welcome: "欢迎来到中国",
    hero: {
      title: "为国际访客提供专业地接服务",
      subtitle: "与我们的专业导游和展览协助服务一起探索中国的精华",
      tours: "探索旅游线路",
      exhibitions: "查看展会服务"
    },
    services: {
      tagline: "我们的服务",
      title: "为您在中国的停留提供全方位解决方案",
      description: "我们提供您所需的一切支持，让您的中国之旅难忘而成功",
      tourGuide: "专业导游",
      tourGuideDesc: "具有深厚中国历史文化知识的专家导游，覆盖北京及主要城市",
      exhibitionService: "展会支持",
      exhibitionServiceDesc: "为中国各地的IT展会提供全面协助",
      customItinerary: "定制行程",
      customItineraryDesc: "根据您的兴趣和需求量身定制的旅行计划",
      accommodation: "优质住宿",
      accommodationDesc: "安排舒适便捷的住宿"
    },
    featuredTours: {
      tagline: "热门线路",
      title: "探索中国精华",
      viewAll: "查看全部线路",
      bestseller: "畅销产品",
      historicalTitle: "历史文化之旅",
      historicalDesc: "探索北京标志性景点，包括故宫、天安门广场和天坛",
      modernTitle: "现代城市之旅",
      modernDesc: "体验当代北京，参观奥运公园、中央电视塔和充满活力的购物区",
      gardensTitle: "皇家园林之旅",
      gardensDesc: "参观颐和园和圆明园等精美的皇家园林",
      perPerson: "每人",
      details: "查看详情"
    },
    exhibitionServices: {
      tagline: "展会支持",
      title: "中国IT展会的合作伙伴",
      description: "我们帮助国际企业借助专业协助浏览中国的主要科技展会",
      whyChooseUs: {
        title: "为什么选择我们的展会服务？",
        professional: "行业专业知识",
        professionalDesc: "我们的团队在中国IT展览领域拥有丰富经验",
        languageSupport: "多语言支持",
        languageSupportDesc: "流利的英语、中文和其他主要语言",
        logistics: "全面物流支持",
        logisticsDesc: "从签证协助到交通和住宿安排"
      },
      learnMore: "了解更多展会服务"
    },
    testimonials: {
      tagline: "客户体验",
      title: "客户评价",
      testimonial1: "导游非常出色——知识渊博、友好且专业。让我们的北京之旅真正难忘！",
      testimonial2: "他们的展会支持服务非常宝贵。没有他们，我们无法顺利参加展会。",
      testimonial3: "从机场接机到旅游安排，一切都处理得无缝衔接。强烈推荐给商务旅行者。"
    },
    cta: {
      title: "准备好体验北京的精华了吗？",
      subtitle: "立即联系我们，开始规划您的完美行程或展会参观",
      contactUs: "联系我们",
      exploreTours: "探索旅游线路"
    },
    nav: {
      home: "首页",
      tours: "旅游服务",
      exhibitions: "展会服务",
      about: "关于我们",
      contact: "联系我们"
    },
    footer: {
      contactInfo: "联系信息",
      address: "中国北京市天安门广场123号",
      phone: "+86 10 1234 5678",
      email: "info@beijinggroundservices.com",
      quickLinks: "快速链接",
      followUs: "关注我们",
      copyright: "© 2026 北京地接服务。保留所有权利。"
    },
    consultation: {
      title: "需要帮助吗？",
      message: "与我们的团队聊天获取即时帮助"
    }
  }
};

export default translations;