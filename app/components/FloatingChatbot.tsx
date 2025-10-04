'use client';

import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

export default function FloatingChatbot() {
  const [inputText, setInputText] = useState<string>('Ask WizeBot about finance...');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string>('');

  const handleSendClick = () => {
    if (isEditing && inputText.trim() !== 'Ask WizeBot about finance...') {
      alert(`Sending: ${inputText}`);
      setInputText('Ask WizeBot about finance...');
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
      textarea.style.height = '23px'; // Force single line height initially
      textarea.style.height = `${Math.min(Math.max(textarea.scrollHeight, 23), 150)}px`; // Ensure it stays at 23px minimum
    }
  }, [inputText]);

  return (
    <div className="floating-chatbot">
      {showPopup && (
        <div className="popup">
          <div className="popup-content">{popupMessage}</div>
        </div>
      )}
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
      <p className="disclaimer">
        For more professional advice, consult a certified financial advisor.
      </p>
    </div>
  );
}