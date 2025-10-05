'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const questions = [
    { id: 'car', emoji: '🚗', text: 'When should I buy a car?', content: 'When should I buy a car?' },
    { id: 'investment', emoji: '💰', text: 'Where to invest 1 lakh rupees?', content: 'Where to invest 1 lakh rupees?' },
    { id: 'gold', emoji: '⏰', text: 'Is it a good time to buy gold?', content: 'Is it a good time to buy gold?' },
    { id: 'emergency', emoji: '⚠️', text: 'How to create an emergency fund?', content: 'How to create an emergency fund?' },
    { id: 'stocks', emoji: '📈', text: 'How to start investing in stocks?', content: 'How to start investing in stocks?' },
  ];

  const handleTabClick = (content: string, text: string) => {
    console.log(`Selected: ${text}, Content: ${content}`);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="app-container">
        <div className="questions-section">
          <h2 className="section-title">Questions You Can Ask :</h2>
          <div className="cards-container" style={{ overflow: 'auto', maxHeight: 'calc(100vh - 6rem)' }}>
            {questions.map((q) => (
              <div
                key={q.id}
                className={`card ${q.id}-card`}
                onClick={() => handleTabClick(q.content, q.text)}
              >
                <span className="card-emoji" role="img" aria-label={q.text}>{q.emoji}</span>
                <span>{q.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}