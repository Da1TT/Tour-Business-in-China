import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Types for contact form
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { t } = useLanguage();
  
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  // Form validation state
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  
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

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof ContactFormData];
        return newErrors;
      });
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, this would send the form data to a server
      console.log("Form submitted:", formData);
      
      // Show success message
      toast.success("Thank you for your message! We will get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  // Contact information
  const contactInfo = [
    {
      title: "Visit Us",
      description: "123 Tiananmen Square, Beijing, China",
      icon: "fa-map-marker-alt"
    },
    {
      title: "Call Us",
      description: "+86 10 1234 5678",
      icon: "fa-phone"
    },
    {
      title: "Email Us",
      description: "info@beijinggroundservices.com",
      icon: "fa-envelope"
    },
    {
      title: "Business Hours",
      description: "Monday - Friday: 9:00 AM - 6:00 PM",
      icon: "fa-clock"
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
        <span className="text-red-600 font-medium">{t("nav.contact")}</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Get In Touch With Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or need assistance? Our team is ready to help you plan your perfect Beijing experience.
        </p>
      </motion.div>

      {/* Contact Form and Info */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors",
                    errors.name 
                      ? "border-red-500 focus:ring-red-600" 
                      : "border-gray-300 focus:ring-red-600 focus:border-red-600"
                  )}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors",
                    errors.email 
                      ? "border-red-500 focus:ring-red-600" 
                      : "border-gray-300 focus:ring-red-600 focus:border-red-600"
                  )}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors",
                    errors.subject 
                      ? "border-red-500 focus:ring-red-600" 
                      : "border-gray-300 focus:ring-red-600 focus:border-red-600"
                  )}
                >
                  <option value="">Select a subject</option>
                  <option value="tour">Tour Inquiry</option>
                  <option value="exhibition">Exhibition Support</option>
                  <option value="custom">Custom Itinerary</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors",
                    errors.message 
                      ? "border-red-500 focus:ring-red-600" 
                      : "border-gray-300 focus:ring-red-600 focus:border-red-600"
                  )}
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`fa-solid ${info.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map (using image as placeholder) */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Beijing%20map%20with%20location%20pin%2C%20Tiananmen%20Square&sign=841c73323c99e61763fc4c6f9fe29862" 
                alt="Our Location" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>
        
        <div className="space-y-4">
          {[
            {
              question: "What languages do your guides speak?",
              answer: "Our guides are fluent in English, Chinese, Japanese, Korean, French, Spanish, and German. We can also arrange guides for other languages upon request."
            },
            {
              question: "How far in advance should I book your services?",
              answer: "We recommend booking at least 2-4 weeks in advance to ensure availability, especially during peak tourist seasons and major exhibitions."
            },
            {
              question: "What is your cancellation policy?",
              answer: "Cancellations made 7 days or more before the scheduled service will receive a full refund. Cancellations made 3-6 days in advance will receive a 50% refund. No refunds for cancellations made less than 3 days in advance."
            },
            {
              question: "Can you help with visa applications?",
              answer: "While we don't directly process visas, we can provide guidance on the visa application process and supply necessary documentation for your visa application."
            }
          ].map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-medium">
                  {faq.question}
                  <i className="fa-solid fa-chevron-down text-gray-500 transition-transform group-open:rotate-180"></i>
                </summary>
                <div className="p-5 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}