'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatPanel from './components/ChatPanel';
import styles from './styles/Layout.module.css';

// Datos de ejemplo para la demostración
const mockAssistants = ['Asistente de Ventas', 'Soporte Técnico', 'Onboarding'];

const mockMessages = [
  {
    id: '1',
    text: '¡Hola! ¿En qué puedo ayudarte hoy?',
    sender: 'assistant',
    timestamp: new Date(2023, 5, 10, 10, 30)
  },
  {
    id: '2',
    text: 'Necesito información sobre sus servicios',
    sender: 'user',
    timestamp: new Date(2023, 5, 10, 10, 32)
  },
  {
    id: '3',
    text: 'Claro, ofrecemos servicios de consultoría, desarrollo de software y soporte técnico. ¿Sobre cuál te gustaría saber más?',
    sender: 'assistant',
    timestamp: new Date(2023, 5, 10, 10, 33)
  },
  {
    id: '4',
    text: 'Me interesa el desarrollo de software',
    sender: 'user',
    timestamp: new Date(2023, 5, 11, 9, 15)
  },
  {
    id: '5',
    text: 'Excelente elección. Nuestro equipo de desarrollo tiene experiencia en aplicaciones web, móviles y de escritorio. ¿Tienes algún proyecto específico en mente?',
    sender: 'assistant',
    timestamp: new Date(2023, 5, 11, 9, 17)
  }
] as {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}[];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [features, setFeatures] = useState({
    files: true,
    images: true,
    audio: true,
    emojis: true,
    gifs: true,
    stickers: true
  });
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Sidebar 
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className={styles.rightPanel}>
          <div className={styles.brandingHeader}>
            <img src="/vercel.svg" alt="Logo" className={styles.brandLogo} width={40} height={40} />
            <span className={styles.brandSlogan}>Tu asistente virtual personalizado</span>
          </div>
          <ChatPanel 
            assistantName="Asistente Virtual"
            assistantImage="/assistant_virtual.png"
            messages={mockMessages}
            features={features}
          />
        </div>
      </div>
    </div>
  );
}