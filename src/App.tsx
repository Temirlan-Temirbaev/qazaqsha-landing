import React, { useState } from 'react';
import { Globe2, Download, ExternalLink } from 'lucide-react';

type Language = 'kz' | 'ru';

const translations = {
  kz: {
    title: 'Qazaqsha',
    subtitle: 'Қазақ тілін үйренуге арналған қосымша',
    description: 'Қазақ тілін оңай әрі тиімді үйреніңіз. Біздің қосымша сізге көмектеседі.',
    downloadButton: 'Қосымшаны жүктеу',
    webAppButton: 'Веб қосымшаға өту',
  },
  ru: {
    title: 'Qazaqsha',
    subtitle: 'Приложение для изучения казахского языка',
    description: 'Изучайте казахский язык легко и эффективно. Наше приложение поможет вам.',
    downloadButton: 'Скачать приложение',
    webAppButton: 'Открыть веб-приложение',
  },
};

function App() {
  const [language, setLanguage] = useState<Language>('kz');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <nav className="absolute top-0 right-0 p-6">
        <button
          onClick={() => setLanguage(language === 'kz' ? 'ru' : 'kz')}
          className="flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-full px-4 py-2 transition-all"
        >
          <Globe2 size={20} />
          <span className="uppercase">{language === 'kz' ? 'Ru' : 'Kz'}</span>
        </button>
      </nav>

      <main className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold mb-4">{t.title}</h1>
          <h2 className="text-3xl font-semibold mb-6">{t.subtitle}</h2>
          <p className="text-xl mb-12 text-white/90">{t.description}</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="https://drive.google.com/file/d/1CilQ4Y646a7H2NwtJJ9so8_3GeBf6EfD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white text-purple-600 hover:bg-white/90 rounded-xl px-8 py-4 text-xl font-semibold transition-all transform hover:scale-105"
            >
              <Download size={24} />
              {t.downloadButton}
            </a>
            
            <a
              href="https://qazaqshapp.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-purple-700 hover:bg-purple-800 rounded-xl px-8 py-4 text-xl font-semibold transition-all transform hover:scale-105"
            >
              <ExternalLink size={24} />
              {t.webAppButton}
            </a>
          </div>

        
        </div>
      </main>
    </div>
  );
}

export default App;