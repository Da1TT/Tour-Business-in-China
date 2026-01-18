import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-2">
                TC
              </div>
              <span className="font-bold text-xl">Tour & Business in China</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional ground services for international visitors to Beijing, China.
              Making your stay comfortable, convenient, and memorable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.contactInfo")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-map-marker-alt text-red-500 mt-1 mr-3"></i>
                <span className="text-gray-400">{t("footer.address")}</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-phone text-red-500 mt-1 mr-3"></i>
                <span className="text-gray-400">{t("footer.phone")}</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-envelope text-red-500 mt-1 mr-3"></i>
                <span className="text-gray-400">{t("footer.email")}</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.tours")}
                </Link>
              </li>
              <li>
                <Link to="/exhibitions" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.exhibitions")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.followUs")}</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest updates and special offers.
            </p>
            <form className="space-y-2">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}