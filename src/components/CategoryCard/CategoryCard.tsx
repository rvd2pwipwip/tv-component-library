import React from "react";
import "./CategoryCard.css";

export interface CategoryCardProps {
  /**
   * Category name or title (displayed as overlay on thumbnail)
   */
  title: string;
  /**
   * Category thumbnail image URL (optional)
   */
  thumbnailUrl?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional focus handler for TV navigation
   */
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  /**
   * Optional blur handler for TV navigation
   */
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  /**
   * Whether the card is currently focused (for custom navigation)
   */
  focused?: boolean;
  /**
   * Collect all extra props (e.g., onKeyDown)
   */
  [key: string]: any;
}

/**
 * CategoryCard - TV-optimized category card component
 *
 * Best practice for TV navigation:
 * - The thumbnail div is the focusable element (tabIndex, ref, etc.)
 * - Navigation and Enter/OK key handling should be managed by the parent (e.g., KeyboardWrapper), not here.
 * - onFocus/onBlur are pass-through props for optional visual or analytics effects.
 * - Focus ring styling should use a class or data attribute (e.g., [data-focused="true"] or a `focused` prop) for TV consistency.
 * - This keeps CategoryCard presentational and reusable across navigation systems.
 * - Text is displayed as an overlay on the thumbnail, centered horizontally and vertically
 */
export const CategoryCard = React.forwardRef<HTMLDivElement, CategoryCardProps>(
  (
    {
      title,
      thumbnailUrl,
      onClick,
      onFocus,
      onBlur,
      onKeyDown,
      focused = false,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="tv-category-card">
        {/* The thumbnail is the actual focusable element for TV navigation */}
        <div
          ref={ref}
          className={`tv-category-card__thumbnail${
            focused ? " tv-focus-ring" : ""
          }`}
          tabIndex={0}
          role="button"
          aria-label={title}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          {...rest}
        >
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={`${title} thumbnail`}
              className="tv-category-card__image"
            />
          ) : (
            <div className="tv-category-card__placeholder" />
          )}
          <div className="tv-category-card__title-overlay">
            <h3 className="tv-category-card__title">{title}</h3>
          </div>
        </div>
      </div>
    );
  }
);
