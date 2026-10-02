import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setActivePage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <Home 
            setActivePage={setActivePage} 
            onSelectProject={handleSelectProject} 
          />
        );
      case 'about':
        return <About setActivePage={setActivePage} />;
      case 'projects':
        return (
          <Projects 
            selectedProject={selectedProject} 
            setSelectedProject={setSelectedProject} 
          />
        );
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home 
            setActivePage={setActivePage} 
            onSelectProject={handleSelectProject} 
          />
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased selection:bg-brand-500 selection:text-white transition-colors duration-300">
        <Navbar 
          activePage={activePage} 
          setActivePage={setActivePage} 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer setActivePage={setActivePage} />
      </div>
    </LanguageProvider>
  );
}
