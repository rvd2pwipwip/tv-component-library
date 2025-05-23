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
  children?: React.ReactNode;
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
}

/**
 * Button - TV-optimized button component
 *
 * Best practice for TV navigation:
 * - The button element is the focusable element (tabIndex, ref, etc.)
 * - All Norigin props (data-focus-key, data-focused, etc.) are forwarded to the button
 * - Focus ring styling should use [data-focused="true"] instead of :focus or :focus-visible
 * - This ensures Norigin can manage both focus logic and focus styling
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    icon,
    showIcon,
    ...props // This will include Norigin's data-focus-key, data-focused, etc.
  }, ref) => {
    const isIconOnly = showIcon && !children;
    const buttonClasses = [
      'tv-button',
      `tv-button--${variant}`,
      `tv-button--${size}`,
      isIconOnly && 'tv-button--icon-only',
    ].filter(Boolean).join(' ');

    return (
      // The button is the actual focusable element for TV navigation
      <button
        ref={ref}
        type="button"
        className={buttonClasses}
        onClick={onClick}
        tabIndex={0}
        {...props} // Forward all Norigin props (data-focused, data-focus-key, etc.)
      >
        {showIcon && <span className="tv-button__icon">{icon}</span>}
        <span className="tv-button__label">{children}</span>
      </button>
    );
  }
); 