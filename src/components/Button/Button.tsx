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
  /**
   * Optional icon to display before the label
   */
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'medium',
  icon,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`tv-button tv-button--${variant} tv-button--${size}`}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="tv-button__icon">{icon}</span>}
      <span className="tv-button__label">{label}</span>
    </button>
  );
}; 