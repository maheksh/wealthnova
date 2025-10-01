'use client';

import { useState, useEffect } from 'react';
import { Car, DollarSign, Clock, AlertTriangle, TrendingUp, Send } from 'lucide-react';

export default function Home() {
  const [inputText, setInputText] = useState<string>('Ask WizeBot about finance...');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string>('');

  const questions = [
    { id: 'car', icon: Car, text: 'When should I buy a car?', content: 'When should I buy a car?' },
    { id: 'investment', icon: DollarSign, text: 'Where to invest 1 lakh rupees?', content: 'Where to invest 1 lakh rupees?' },
    { id: 'gold', icon: Clock, text: 'Is it a good time to buy gold?', content: 'Is it a good time to buy gold?' },
    { id: 'emergency', icon: AlertTriangle, text: 'How to create an emergency fund?', content: ' How to create an emergency fund?' },
    { id: 'stocks', icon: TrendingUp, text: 'How to start investing in stocks?', content: 'How to start investing in stocks?' },
  ];

  const handleTabClick = (content: string, text: string) => {
    setInputText(content);
    setIsEditing(true);
    setPopupMessage(`Selected: ${text}`);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  const handleSendClick = () => {
    if (isEditing && inputText.trim() !== 'Ask wealthBot about finance...') {
      alert(`Sending: ${inputText}`);
      setInputText('Ask WealthBot about finance...');
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    setIsEditing(true);
  };

  // Effect to automatically adjust textarea height based on content
  useEffect(() => {
    const textarea = document.querySelector('.input-field') as HTMLTextAreaElement;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height
      textarea.style.height = `${Math.min(Math.max(textarea.scrollHeight, 32), 150)}px`; // Limit to max-height of 150px
    }
  }, [inputText]); // Re-run when inputText changes

  return (
    <div className="app-container">
      {/* Title with Logo */}
      <div className="title-container">
        <img src="/logo.png" alt="Wize Wealth Logo" className="logo-image" /> {/* Replace with your image path */}
        <h1 className="title">WealthNova</h1>
      </div>

      {/* Questions Section */}
      <div className="questions-section">
        <h2 className="section-title">Questions You Can Ask :</h2>

        {/* Question Cards */}
        <div className="cards-container">
          {questions.map((q) => (
            <div
              key={q.id}
              className={`card ${q.id}-card`}
              onClick={() => handleTabClick(q.content, q.text)}
            >
              <q.icon className="card-icon" />
              <span>{q.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">{popupMessage}</div>
        </div>
      )}

      {/* Input Bar and Send Button Container */}
      <div className="input-bar-container">
        <div className="input-bar">
          <textarea
            value={inputText}
            onChange={handleInputChange}
            className="input-field"
            onFocus={() => !isEditing && setInputText('')}
            onBlur={() => !isEditing && inputText.trim() === '' && setInputText('Ask WizeBot about finance...')}
          />
        </div>
        <div className="send-button" onClick={handleSendClick}>
          <Send className="send-icon" />
        </div>
      </div>

      {/* Disclaimer */}
      <p className="disclaimer">
        For more professional advice, consult a certified financial advisor.
      </p>
    </div>
  );
}