// app/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function HomePage() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 🔒 Prevent navbar from disappearing when mobile keyboard opens
  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      setVH();
      window.addEventListener('resize', setVH);

      let startY = 0;
      const handleTouchStart = (e: TouchEvent) => {
        if (e.touches.length === 1) startY = e.touches[0].clientY;
      };
      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length !== 1) return;
        const deltaY = e.touches[0].clientY - startY;
        const scrollTop = window.scrollY;
        const isAtTop = scrollTop === 0;
        const isAtBottom =
          scrollTop + window.innerHeight >= document.body.scrollHeight;
        if ((isAtTop && deltaY > 0) || (isAtBottom && deltaY < 0)) {
          e.preventDefault();
        }
      };

      document.body.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.body.addEventListener('touchmove', handleTouchMove, { passive: false });

      return () => {
        window.removeEventListener('resize', setVH);
        document.body.removeEventListener('touchstart', handleTouchStart);
        document.body.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, []);

  // 📏 Auto-resize textarea as user types (max 140px ≈ 5 lines)
  const handleInput = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = Math.min(el.scrollHeight, 140) + 'px';
    }
  };

  return (
    <div className={styles.appContainer}>
      {/* Main Content */}
      <section className={styles.questionsSection}>
        <h2 className={styles.sectionTitle}>Quick Questions</h2>
        <div className={styles.cardsContainer}>
          <div className={`${styles.card} ${styles.carCard}`}>
            <span className={styles.cardEmoji}>🚗</span>
            <span>Should I buy a car now?</span>
          </div>
          <div className={`${styles.card} ${styles.investmentCard}`}>
            <span className={styles.cardEmoji}>📈</span>
            <span>How to start investing?</span>
          </div>
          <div className={`${styles.card} ${styles.goldCard}`}>
            <span className={styles.cardEmoji}>💰</span>
            <span>Is gold a good investment?</span>
          </div>
          <div className={`${styles.card} ${styles.emergencyCard}`}>
            <span className={styles.cardEmoji}>🚨</span>
            <span>How much for emergency fund?</span>
          </div>
          <div className={`${styles.card} ${styles.stocksCard}`}>
            <span className={styles.cardEmoji}>📊</span>
            <span>Best stocks for beginners?</span>
          </div>
        </div>
      </section>

      {/* Centered Auto-Growing Chat */}
      <div className={styles.floatingChatbot}>
        <div className={styles.inputBarContainer}>
          <div className={styles.inputBar}>
            <textarea
              ref={textareaRef}
              className={styles.inputField}
              placeholder="Ask anything about finance..."
              onInput={handleInput}
              rows={1}
              aria-label="Type your message"
            />
            <button className={styles.sendButton} aria-label="Send message">
              <svg className={styles.sendIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.disclaimer}>
          AI may produce inaccurate or misleading information.
        </div>
      </div>
    </div>
  );
}