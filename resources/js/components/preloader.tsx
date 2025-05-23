import React, { useEffect, useState } from "react";

interface preloaderProps {
      children: React.ReactNode;
}

const preloader: React.FC<preloaderProps> = ({ children }) => {
      const [loading, setLoading] = useState(true);
      const [fadeOut, setFadeOut] = useState(false);

      useEffect(() => {
            const timer = setTimeout(() => {
                  setFadeOut(true);
                  setTimeout(() => {
                        setLoading(false);
                  }, 300);
            }, 1000); // waktu preloader aktif

            return () => clearTimeout(timer);
      }, []);

      if (loading) {
            return (
                  <div id="preloader"
                        className={`fixed inset-0 bg-white flex items-center justify-center transition-opacity duration-300 ${fadeOut ? "opacity-0" : "opacity-100"
                              }`} >
                        <span>Loading...</span>
                  </div>
            );
      }
      return <>{children}</>;
};

export default preloader;
