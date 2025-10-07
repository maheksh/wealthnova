// app/page.tsx
'use client';

import { useState } from 'react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
          <button type="submit" className="btn btn-subscribe">
            Subscribe to Insights
          </button>
        </form>
      </section>

      <section className="section">
        <h2 className="section-title">SPECIAL BOTS</h2>

        <div className="bot-card">
          <h3 className="bot-title">💡 Insurance Advisor</h3>
          <ul className="bot-features">
            <li>Compare 50+ policy providers</li>
            <li>Personalized risk assessment</li>
            <li>Instant claim support</li>
          </ul>
          <button className="btn btn-chat">Start Chat</button>
        </div>

        <div className="bot-card">
          <h3 className="bot-title">📈 Investment Advisor</h3>
          <ul className="bot-features">
            <li>AI-driven stock analysis</li>
            <li>Real-time market alerts</li>
            <li>Portfolio diversification tips</li>
            <li>Retirement planning tools</li>
          </ul>
          <button className="btn btn-chat">Start Chat</button>
        </div>

        <div className="divider-above-input"></div>

        <form onSubmit={handleSendMessage} className="ask-form">
          <input
            type="text"
            placeholder="Ask about stocks, insurance, or wealth..."
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