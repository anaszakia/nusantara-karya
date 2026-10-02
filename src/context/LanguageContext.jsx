import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    // Check google translate cookie or localStorage
    const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
    if (match) {
      const val = decodeURIComponent(match[1]);
      if (val.includes('/id/en') || val.includes('/auto/en')) return 'en';
    }
    return localStorage.getItem('site_lang') || 'id';
  });

  const changeLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('site_lang', lang);

    if (lang === 'en') {
      // Set google translate cookie for English
      document.cookie = "googtrans=/id/en; path=/";
      document.cookie = "googtrans=/id/en; domain=" + window.location.hostname + "; path=/";
      document.cookie = "googtrans=/auto/en; path=/";
      document.cookie = "googtrans=/auto/en; domain=" + window.location.hostname + "; path=/";
    } else {
      // Reset to original Indonesian
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + window.location.hostname + "; path=/;";
      document.cookie = "googtrans=/id/id; path=/";
      document.cookie = "googtrans=/auto/id; path=/";
    }

    // Trigger Google Translate select change if available
    const selectElem = document.querySelector('.goog-te-combo');
    if (selectElem) {
      selectElem.value = lang;
      selectElem.dispatchEvent(new Event('change'));
    } else {
      // Reload to let Google translate apply instantly across the full DOM
      window.location.reload();
    }
  };

  useEffect(() => {
    // Apply on initial load if needed
    if (language === 'en') {
      const selectElem = document.querySelector('.goog-te-combo');
      if (selectElem && selectElem.value !== 'en') {
        selectElem.value = 'en';
        selectElem.dispatchEvent(new Event('change'));
      }
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
