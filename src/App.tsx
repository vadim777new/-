import React, { useEffect, useState } from 'react';
import { Brain, Users, Mic2, ExternalLink, ArrowRight, Youtube, BarChart, Building, Briefcase, Moon, Sun, FileDown, Calendar } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const workExperience = [
    {
      position: "Lead AI Engineer",
      company: "TechCorp AI",
      duration: "2022 - Present",
      responsibilities: [
        "Led team of 5 ML engineers in developing state-of-the-art NLP models",
        "Improved model accuracy by 35% through innovative architecture changes",
        "Deployed ML pipelines serving 1M+ daily predictions"
      ]
    },
    {
      position: "Senior ML Engineer",
      company: "DataDrive Solutions",
      duration: "2020 - 2022",
      responsibilities: [
        "Developed computer vision models for autonomous systems",
        "Reduced inference time by 60% through model optimization",
        "Mentored junior engineers in ML best practices"
      ]
    },
    {
      position: "ML Engineer",
      company: "AI Innovations",
      duration: "2018 - 2020",
      responsibilities: [
        "Built recommendation systems using deep learning",
        "Implemented A/B testing framework for model deployment",
        "Collaborated with product team on AI feature development"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-purple-600" />
              <span className="text-xl font-bold dark:text-white">Нейроманія</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Проєкти</a>
              <a href="#expertise" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Експертиза</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Про мене</a>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Зв'язатися
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-[slideUp_0.5s_ease-out]">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Профіль"
                  className="w-48 h-48 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
                  <Youtube className="w-6 h-6 text-purple-600" />
                </div>
                <button className="absolute top-0 right-0 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 dark:text-white">
                  <Users className="w-4 h-4" />
                  <span className="font-semibold">60К+ підписників</span>
                </button>
              </div>
              
              <div>
                <h1 className="text-4xl font-bold mb-4 dark:text-white">
                  Спеціаліст з <span className="text-purple-600">Нейронних Мереж</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                  Впроваджую інноваційні рішення у сфері ШІ з фокусом на нейронні мережі та машинне навчання. 
                  Допомагаю компаніям трансформувати їхню діяльність за допомогою передових технологій ШІ.
                </p>
                <div className="flex gap-4">
                  <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
                    Зв'язатися
                  </button>
                  <a 
                    href="/resume.pdf" 
                    download 
                    className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center gap-2"
                  >
                    <FileDown className="w-5 h-5" />
                    Завантажити резюме
                  </a>
                </div>
              </div>
            </div>

            <div className="relative animate-[slideUp_0.7s_ease-out]">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                alt="Виступ"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-3 rounded-xl">
                <p className="text-lg dark:text-white">
                  Експерт з ШІ - <span className="text-purple-600">Максим Кім</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 dark:text-white">Досвід роботи</h2>
          <div className="max-w-3xl mx-auto">
            {workExperience.map((job, index) => (
              <div 
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-purple-200 dark:border-purple-900 last:pb-0 timeline-dot"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{job.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{job.position}</h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-4">{job.company}</p>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same but with dark mode classes added */}
      {/* Projects Section */}
      <section id="projects" className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 dark:text-white">Визначні проєкти</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Розпізнавання зображень ШІ",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
                description: "Модель глибокого навчання для розпізнавання об'єктів у реальному часі з точністю 99.9%",
                tools: ["TensorFlow", "Python", "OpenCV"]
              },
              {
                title: "Обробка природної мови",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
                description: "Передова система NLP для аналізу тональності та класифікації тексту",
                tools: ["PyTorch", "BERT", "Transformers"]
              },
              {
                title: "Предиктивна аналітика",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
                description: "Модель прогнозування часових рядів для фінансових ринків",
                tools: ["Scikit-learn", "Pandas", "Prophet"]
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      Детальніше <ArrowRight className="w-4 h-4" />
                    </button>
                    <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 dark:bg-gray-800/50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">Про мене</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Як відданий спеціаліст з ШІ, я роками розробляю та впроваджую рішення на основі нейронних мереж
              для різних галузей. Моя робота поєднує передові дослідження з практичним застосуванням,
              допомагаючи бізнесу використовувати потужність штучного інтелекту.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mic2 className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold dark:text-white">Відеоконтент ПМЕФ</h3>
                  <p className="text-gray-600 dark:text-gray-400">Спікер з питань впровадження ШІ</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Youtube className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold dark:text-white">60К+ підписників на YouTube</h3>
                  <p className="text-gray-600 dark:text-gray-400">Освітній контент про ШІ та нейронні мережі</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BarChart className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold dark:text-white">Дослідження в Synergy AI Lab</h3>
                  <p className="text-gray-600 dark:text-gray-400">Провідні дослідження в архітектурі нейронних мереж</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;