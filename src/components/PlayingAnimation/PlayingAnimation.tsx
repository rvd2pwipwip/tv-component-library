import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/animations/eq-animation.json';

export interface PlayingAnimationProps {
  /**
   * Width of the animation in pixels
   */
  width?: number;
  /**
   * Height of the animation in pixels
   */
  height?: number;
  /**
   * Whether the animation should loop
   */
  loop?: boolean;
  /**
   * Whether the animation should autoplay
   */
  autoplay?: boolean;
  /**
   * Color override for the animation (in hex or rgb format)
   */
  color?: string;
}

export const PlayingAnimation: React.FC<PlayingAnimationProps> = ({
  width = 60,
  height = 60,
  loop = true,
  autoplay = true,
  color = '#FFFFFF',
}) => {
  // Create a style object for the container
  const containerStyle: React.CSSProperties = {
    width,
    height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // If a color is provided, we need to override the animation colors
  const animationColorStyle = color ? {
    filter: `brightness(0) saturate(100%) invert(100%)`,
  } : {};

  return (
    <div style={containerStyle}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={animationColorStyle}
      />
    </div>
  );
}; 