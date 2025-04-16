import React from 'react';
import './Button.css';

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
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
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'medium',
  ...props
}) => {
  return (
    <button
      type="button"
      className={`tv-button tv-button--${variant} tv-button--${size}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}; 