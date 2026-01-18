import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ConsultationButton() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-colors focus:outline-none z-20"
        aria-label="Open chat"
      >
        <i className="fa-solid fa-comments text-xl"></i>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-10 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Chat Header */}
        <div className="bg-red-600 text-white p-4 flex justify-between items-center">
          <h3 className="font-bold">{t("consultation.title")}</h3>
          <button
            onClick={toggleChat}
            className="text-white hover:text-gray-200 focus:outline-none"
            aria-label="Close chat"
          >
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        {/* Chat Body */}
        <div className="p-4 h-72 overflow-y-auto bg-gray-50">
          {/* Welcome Message */}
          <div className="flex items-start mb-4">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white mr-3 mt-1">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
              <p className="text-gray-800">{t("consultation.message")}</p>
            </div>
          </div>

          {/* Predefined Messages */}
          <div className="space-y-2">
            <button className="w-full text-left bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors text-sm">
              I'm interested in booking a tour
            </button>
            <button className="w-full text-left bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors text-sm">
              I need exhibition support
            </button>
            <button className="w-full text-left bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors text-sm">
              Can you help with custom itinerary planning?
            </button>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
            />
            <button className="ml-2 text-red-600 hover:text-red-700 focus:outline-none">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}