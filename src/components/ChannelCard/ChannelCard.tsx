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
  onFocus?: () => void;
  /**
   * Optional blur handler for TV navigation
   */
  onBlur?: () => void;
}

/**
 * ChannelCard - TV-optimized card component
 *
 * Best practice for TV navigation:
 * - The thumbnail div is the focusable element (tabIndex, ref, etc.)
 * - All Norigin props (data-focus-key, data-focused, etc.) are forwarded to the thumbnail
 * - Focus ring styling should use [data-focused="true"] instead of :focus or :focus-visible
 * - This ensures Norigin can manage both focus logic and focus styling
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
      ...props // This will include Norigin's data-focus-key, data-focused, etc.
    },
    ref
  ) => {
    return (
      <div className="tv-channel-card">
        {/* The thumbnail is the actual focusable element for TV navigation */}
        <div
          ref={ref}
          className="tv-channel-card__thumbnail"
          tabIndex={0}
          role="button"
          aria-label={`${title}${isPlaying ? ' (Now Playing)' : ''}`}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          {...props} // Forward all Norigin props (data-focused, data-focus-key, etc.)
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