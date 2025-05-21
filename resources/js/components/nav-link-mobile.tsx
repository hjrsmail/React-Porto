import React from 'react';

interface NavLinkMobileProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}

const NavLinkMobile: React.FC<NavLinkMobileProps> = ({ href, active = false, children }) => {
  const baseClass =
    'block rounded-xl px-2 py-1 text-md font-medium text-black dark:text-white';
  const activeClass = 'bg-gradient-to-r from-blue-500 to-purple-500';
  const inactiveClass = 'hover:scale-105 duration-200';

  return (
    <a
      href={href}
      className={`${baseClass} ${active ? activeClass : inactiveClass}`}
      aria-current={active ? 'page' : undefined}
    >
      {children}
    </a>
  );
};

export default NavLinkMobile;
