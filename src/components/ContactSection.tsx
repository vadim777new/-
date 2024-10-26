import React from 'react';
import { Mail, MapPin, Phone, MessageSquare, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Готовий до співпраці</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Зацікавлені у впровадженні ШІ у вашому бізнесі? Давайте обговоримо, як мій досвід може допомогти вам досягти ваших цілей.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 dark:text-white">Контактна інформація</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="dark:text-white">contact@neuromania.ai</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Телефон</p>
                      <p className="dark:text-white">+380 50 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Локація</p>
                      <p className="dark:text-white">Київ, Україна</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Робочі години</p>
                      <p className="dark:text-white">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 dark:text-white">Надіслати повідомлення</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Ім'я
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent"
                    placeholder="Ваше ім'я"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent"
                    placeholder="ваш@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Повідомлення
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent"
                    placeholder="Ваше повідомлення..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Надіслати
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;