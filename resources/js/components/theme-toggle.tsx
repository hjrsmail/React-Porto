import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
      const [darkMode, setDarkMode] = useState(false);

      // Saat komponen mount, cek localStorage & set class dark di html
      useEffect(() => {
            const stored = localStorage.getItem('darkMode');
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            const handleSystemThemeChange = (e: MediaQueryListEvent) => {
                  if (stored === null) { // hanya berlaku jika user belum set preferensi sendiri
                        const prefersDark = e.matches;
                        setDarkMode(prefersDark);
                        document.documentElement.classList.toggle('dark', prefersDark);
                  }
            };

            // Deteksi awal
            if (stored === null) {
                  const prefersDark = mediaQuery.matches;
                  setDarkMode(prefersDark);
                  document.documentElement.classList.toggle('dark', prefersDark);
            } else if (stored === 'true') {
                  setDarkMode(true);
                  document.documentElement.classList.add('dark');
            } else {
                  setDarkMode(false);
                  document.documentElement.classList.remove('dark');
            }

            // Tambah listener perubahan sistem
            mediaQuery.addEventListener('change', handleSystemThemeChange);

            // Cleanup
            return () => {
                  mediaQuery.removeEventListener('change', handleSystemThemeChange);
            };
      }, []);


      // Fungsi toggle
      const toggleDarkMode = () => {
            if (darkMode) {
                  document.documentElement.classList.remove('dark');
                  localStorage.setItem('darkMode', 'false');
                  setDarkMode(false);
            } else {
                  document.documentElement.classList.add('dark');
                  localStorage.setItem('darkMode', 'true');
                  setDarkMode(true);
            }
      };

      return (
            <button
                  onClick={toggleDarkMode}
                  className="z-50 p-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded"
                  aria-label="Toggle dark mode"
            >
                  {darkMode ? '🌙' : '☀️'}
            </button>
      );
};

export default ThemeToggle;
