import React from 'react';
import { Link, LinkProps, useNavigate } from 'react-router-dom';

interface ScrollLinkProps extends Omit<LinkProps, 'onClick'> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ScrollLink: React.FC<ScrollLinkProps> = ({ 
  to, 
  children, 
  className = '',
  onClick,
  ...props 
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Call the onClick if provided (for mobile menu close)
    if (onClick) {
      onClick();
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Navigate
    navigate(to.toString());
  };

  return (
    <Link 
      to={to} 
      onClick={handleClick} 
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};