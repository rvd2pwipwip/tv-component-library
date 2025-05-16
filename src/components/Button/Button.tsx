import React from 'react';
import './Button.css';

// Extend the ButtonProps interface with React.ButtonHTMLAttributes<HTMLButtonElement>
// to automatically support all standard HTML button attributes (like aria-label, disabled, tabIndex, etc.).
// This makes the Button component more flexible, accessible, and future-proof,
// so it can be used just like a native <button> in any context.
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Content to display inside the button (text, icon, etc.)
   */
  children?: React.ReactNode; // <-- Added this line
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'transparent';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional icon to display before the label
   */
  icon?: React.ReactNode;
  showIcon?: boolean;
  // /**
  //  * Button aria-label
  //  */
  // 'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  icon,
  showIcon,
  ...props
}) => {
  const isIconOnly = showIcon && !children;
const buttonClasses = [
  'tv-button',
  `tv-button--${variant}`,
  `tv-button--${size}`,
  isIconOnly && 'tv-button--icon-only',
].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {showIcon && <span className="tv-button__icon">{icon}</span>}
      <span className="tv-button__label">{children}</span>
    </button>
  );
}; 