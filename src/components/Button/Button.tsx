import React from 'react';
import './Button.css';

export interface ButtonProps {
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
  variant?: 'primary' | 'secondary';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional icon to display before the label
   */
  icon?: React.ReactNode;
  showIcon?: boolean;
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
  const buttonClasses = [
    'tv-button',
    `tv-button--${variant}`,
    `tv-button--${size}`,
  ].join(' ');

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