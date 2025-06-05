import React from 'react';
import './ChannelCard.css';
import { PlayingAnimation } from '../PlayingAnimation/PlayingAnimation';

export interface ChannelCardProps {
  /**
   * Channel name or title (max 2 lines)
   */
  title: string;
  /**
   * Channel thumbnail image URL
   */
  thumbnailUrl?: string;
  /**
   * Whether the channel is currently playing
   */
  isPlaying?: boolean;
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
 * ChannelCard - TV-optimized card component
 *
 * Best practice for TV navigation:
 * - The thumbnail div is the focusable element (tabIndex, ref, etc.)
 * - Navigation and Enter/OK key handling should be managed by the parent (e.g., KeyboardWrapper), not here.
 * - onFocus/onBlur are pass-through props for optional visual or analytics effects.
 * - Focus ring styling should use a class or data attribute (e.g., [data-focused="true"] or a `focused` prop) for TV consistency.
 * - This keeps ChannelCard presentational and reusable across navigation systems.
 */
export const ChannelCard = React.forwardRef<HTMLDivElement, ChannelCardProps>(
  (
    {
      title,
      thumbnailUrl,
      isPlaying = false,
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
      <div className="tv-channel-card">
        {/* The thumbnail is the actual focusable element for TV navigation */}
        <div
          ref={ref}
          className={`tv-channel-card__thumbnail${focused ? ' tv-focus-ring' : ''}`}
          tabIndex={0}
          role="button"
          aria-label={`${title}${isPlaying ? ' (Now Playing)' : ''}`}
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
              className="tv-channel-card__image"
            />
          ) : (
            <div className="tv-channel-card__placeholder" />
          )}
          {isPlaying && (
            <div className="tv-channel-card__playing-indicator">
              <PlayingAnimation />
            </div>
          )}
        </div>
        <h3 className="tv-channel-card__title">{title}</h3>
      </div>
    );
  }
); 