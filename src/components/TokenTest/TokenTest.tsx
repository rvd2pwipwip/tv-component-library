import React from 'react';
import './TokenTest.css';

const TokenTest: React.FC = () => {
  return (
    <div className="token-test">
      <h2>Design Tokens Test</h2>
      
      <div className="token-section">
        <h3>Colors</h3>
        <div className="token-grid">
          <div className="token-item" style={{ backgroundColor: 'var(--color-primary)' }}>
            <span>--color-primary</span>
          </div>
          <div className="token-item" style={{ backgroundColor: 'var(--color-background)' }}>
            <span>--color-background</span>
          </div>
          <div className="token-item" style={{ backgroundColor: 'var(--color-surface)' }}>
            <span>--color-surface</span>
          </div>
          <div className="token-item" style={{ backgroundColor: 'var(--color-text-primary)' }}>
            <span>--color-text-primary</span>
          </div>
        </div>
      </div>
      
      <div className="token-section">
        <h3>Typography</h3>
        <div className="token-list">
          <p style={{ fontSize: 'var(--font-size-h1)' }}>Heading 1 (--font-size-h1)</p>
          <p style={{ fontSize: 'var(--font-size-h2)' }}>Heading 2 (--font-size-h2)</p>
          <p style={{ fontSize: 'var(--font-size-h3)' }}>Heading 3 (--font-size-h3)</p>
          <p style={{ fontSize: 'var(--font-size-body)' }}>Body Text (--font-size-body)</p>
          <p style={{ fontSize: 'var(--font-size-small)' }}>Small Text (--font-size-small)</p>
        </div>
      </div>
      
      <div className="token-section">
        <h3>Spacing</h3>
        <div className="token-list">
          <div className="spacing-item">
            <div className="spacing-item__bar" style={{ width: 'var(--spacing-xs)' }}></div>
            <div className="spacing-item__label">XS (--spacing-xs)</div>
          </div>
          <div className="spacing-item">
            <div className="spacing-item__bar" style={{ width: 'var(--spacing-sm)' }}></div>
            <div className="spacing-item__label">SM (--spacing-sm)</div>
          </div>
          <div className="spacing-item">
            <div className="spacing-item__bar" style={{ width: 'var(--spacing-s12)' }}></div>
            <div className="spacing-item__label">S12 (--spacing-s12)</div>
          </div>
          <div className="spacing-item">
            <div className="spacing-item__bar" style={{ width: 'var(--spacing-md)' }}></div>
            <div className="spacing-item__label">MD (--spacing-md)</div>
          </div>
          <div className="spacing-item">
            <div className="spacing-item__bar" style={{ width: 'var(--spacing-m20)' }}></div>
            <div className="spacing-item__label">M20 (--spacing-m20)</div>
          </div>
          <div className="spacing-item">
            <div className="spacing-item__bar" style={{ width: 'var(--spacing-lg)' }}></div>
            <div className="spacing-item__label">LG (--spacing-lg)</div>
          </div>
          <div className="spacing-item">
            <div className="spacing-item__bar" style={{ width: 'var(--spacing-l28)' }}></div>
            <div className="spacing-item__label">L28 (--spacing-l28)</div>
          </div>
          <div className="spacing-item">
            <div className="spacing-item__bar" style={{ width: 'var(--spacing-xl)' }}></div>
            <div className="spacing-item__label">XL (--spacing-xl)</div>
          </div>
          <div className="spacing-item">
            <div className="spacing-item__bar" style={{ width: 'var(--spacing-x36)' }}></div>
            <div className="spacing-item__label">X36 (--spacing-x36)</div>
          </div>
          <div className="spacing-item">
            <div className="spacing-item__bar" style={{ width: 'var(--spacing-x40)' }}></div>
            <div className="spacing-item__label">X40 (--spacing-x40)</div>
          </div>
          <div className="spacing-item">
            <div className="spacing-item__bar" style={{ width: 'var(--spacing-x44)' }}></div>
            <div className="spacing-item__label">X44 (--spacing-x44)</div>
          </div>
          <div className="spacing-item">
            <div className="spacing-item__bar" style={{ width: 'var(--spacing-xxl)' }}></div>
            <div className="spacing-item__label">XXL (--spacing-xxl)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenTest; 