import React from 'react';
import './KeyNavCard.css';
import { PlayingAnimation } from '../PlayingAnimation/PlayingAnimation';

export interface KeyNavCardProps {
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

export const KeyNavCard: React.FC<KeyNavCardProps> = ({
  title,
  thumbnailUrl,
  isPlaying = false,
  onClick,
  onFocus,
  onBlur,
  ...props
}) => {
  const cardClasses = [
    'tv-keynav-card',
    isPlaying ? 'tv-keynav-card--playing' : '',
  ].join(' ');

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={0}
      role="button"
      aria-label={`${title}${isPlaying ? ' (Now Playing)' : ''}`}
      {...props}
    >
      <div className="tv-keynav-card__thumbnail">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={`${title} thumbnail`}
            className="tv-keynav-card__image"
          />
        ) : (
          <div className="tv-keynav-card__placeholder" />
        )}
        {isPlaying && (
          <div className="tv-keynav-card__playing-indicator">
            <PlayingAnimation />
          </div>
        )}
      </div>
      <h3 className="tv-keynav-card__title">{title}</h3>
    </div>
  );
}; 