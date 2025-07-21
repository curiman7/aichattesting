import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/ChatPanel.module.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatPanelProps {
  assistantName?: string;
  assistantImage?: string;
  messages?: Message[];
  features?: {
    files: boolean;
    images: boolean;
    audio: boolean;
    emojis: boolean;
    gifs: boolean;
    stickers: boolean;
  };
}

const ChatPanel: React.FC<ChatPanelProps> = ({
  assistantName = 'Asistente Virtual',
  assistantImage = '/vercel.svg',
  messages = [],
  features = {
    files: true,
    images: true,
    audio: true,
    emojis: true,
    gifs: true,
    stickers: true
  }
}) => {
  const [inputText, setInputText] = useState('');

  // Agrupar mensajes por fecha
  const groupMessagesByDate = (messages: Message[]) => {
    const groups: { [key: string]: Message[] } = {};
    
    messages.forEach(message => {
      const date = message.timestamp.toLocaleDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
    });
    
    return Object.entries(groups).map(([date, messages]) => ({
      date,
      messages
    }));
  };

  const messageGroups = groupMessagesByDate(messages);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      // Aquí se implementaría la lógica para enviar mensajes
      console.log('Mensaje enviado:', inputText);
      setInputText('');
    }
  };

  return (
    <div className={styles.chatPanel}>
      <div className={styles.chatHeader}>
        <Image
          src={assistantImage}
          alt={assistantName}
          width={40}
          height={40}
          className={styles.assistantAvatar}
        />
        <span className={styles.assistantName}>{assistantName}</span>
      </div>
      
      <div className={styles.messagesContainer}>
        {messageGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <div className={styles.dateGroup}>
              <span className={styles.dateLabel}>{group.date}</span>
            </div>
            
            {group.messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.messageRow} ${message.sender === 'user' ? styles.userRow : styles.assistantRow}`}
              >
                {message.sender === 'assistant' && (
                  <Image
                    src={assistantImage}
                    alt="Avatar"
                    width={36}
                    height={36}
                    className={styles.messageAvatar}
                  />
                )}
                <div
                  className={`${styles.message} ${
                    message.sender === 'user' ? styles.userMessage : styles.assistantMessage
                  }`}
                  style={{ width: 'fit-content', maxWidth: '60vw' }}
                >
                  <div className={styles.messageContent}>
                    {message.text}
                    <div className={styles.messageTime}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <form className={styles.inputArea} onSubmit={handleSendMessage}>
        <div className={styles.inputTools}>
          {features.files && (
            <button type="button" className={styles.toolButton} title="Adjuntar archivo">
              📎
            </button>
          )}
          
          {features.images && (
            <button type="button" className={styles.toolButton} title="Enviar imagen">
              🖼️
            </button>
          )}
          
          {features.audio && (
            <button type="button" className={styles.toolButton} title="Enviar audio">
              🎤
            </button>
          )}
          
          {features.emojis && (
            <button type="button" className={styles.toolButton} title="Emoticonos">
              😊
            </button>
          )}
          
          {features.gifs && (
            <button type="button" className={styles.toolButton} title="GIFs">
              GIF
            </button>
          )}
          
          {features.stickers && (
            <button type="button" className={styles.toolButton} title="Stickers">
              🏷️
            </button>
          )}
        </div>
        
        <input
          type="text"
          className={styles.messageInput}
          placeholder="Escribe un mensaje..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        
        <button type="submit" className={styles.sendButton}>
          ➤
        </button>
      </form>
    </div>
  );
};

export default ChatPanel;