// app/page.tsx
'use client';

import { useState } from 'react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [activeBot, setActiveBot] = useState<'insurance' | 'investment' | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent: "${message}"`);
    setMessage('');
  };

  return (
    <>
      <section className="section">
        <h2 className="section-title">NEWSLETTER</h2>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
          <button type="submit" className="btn-subscribe">
            Subscribe
          </button>
        </form>
      </section>

      <section className="section">
        <h2 className="section-title section-title-left">Special Bots</h2>

        {/* Desktop: Side-by-side | Mobile: Stacked */}
        <div className="bots-container">
          {/* Insurance Advisor */}
          <div 
            className={`bot-card-container ${activeBot === 'insurance' ? 'active' : ''}`}
            onClick={() => setActiveBot('insurance')}
          >
            <div className="bot-card">
              <div className="bot-content">
                <h3 className="bot-title">💡 Insurance Advisor</h3>
                <ul className="bot-features">
                  <li>Policy Comparison</li>
                  <li>Personalized Guidance</li>
                </ul>
              </div>
            </div>
            <button className="btn-chat attached">Start Chat</button>
          </div>

          {/* Investment Advisor */}
          <div 
            className={`bot-card-container ${activeBot === 'investment' ? 'active' : ''}`}
            onClick={() => setActiveBot('investment')}
          >
            <div className="bot-card">
              <div className="bot-content">
                <h3 className="bot-title">📈 Investment Advisor</h3>
                <ul className="bot-features">
                  <li>Stock Research</li>
                  <li>Market Trends</li>
                </ul>
              </div>
            </div>
            <button className="btn-chat attached">Start Chat</button>
          </div>
        </div>

        <div className="divider-above-input"></div>

        <form onSubmit={handleSendMessage} className="ask-form">
          <input
            type="text"
            placeholder="Ask About Finance..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input"
          />
          <button type="submit" className="btn-send">
            ➤
          </button>
        </form>
      </section>
    </>
  );
}