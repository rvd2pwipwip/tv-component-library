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

export const ChannelCard = React.forwardRef<HTMLDivElement, ChannelCardProps>(
  (
    {
      title,
      thumbnailUrl,
      isPlaying = false,
      onClick,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className="tv-channel-card"
        onClick={onClick}
        {...props}
      >
        <div
          ref={ref}
          className="tv-channel-card__thumbnail"
          tabIndex={0}
          role="button"
          aria-label={`${title}${isPlaying ? ' (Now Playing)' : ''}`}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
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