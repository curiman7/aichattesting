
import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css';

interface SidebarProps {
  isOpen?: boolean;
  toggleSidebar?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, toggleSidebar }) => {
  const [endpoint, setEndpoint] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [chatFeatures, setChatFeatures] = useState({
    files: false,
    images: false,
    audio: false,
    emojis: false,
    gifs: false,
    stickers: false,
  });

  const handleFeatureToggle = (feature: keyof typeof chatFeatures) => {
    setChatFeatures((prev) => ({ ...prev, [feature]: !prev[feature] }));
  };

  return (
    <>
      <aside className={isOpen ? styles.sidebarOpen : styles.sidebarClosed}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
          <img
            src="/assistant_virtual.png"
            alt="Asistente Virtual"
            className={styles.assistantImage}
            style={{ background: '#fff' }}
          />
        </div>
        <div style={{ padding: 16 }}>
          <div className={styles.editableField}>
            <label className={styles.label}>Endpoint del chat</label>
            <input
              className={styles.input}
              type="text"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              placeholder="https://chat-backend.example.com/api"
            />
          </div>
          <div className={styles.editableField}>
            <label className={styles.label}>Descripción</label>
            <textarea
              className={styles.textarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={styles.editableField}>
            <label className={styles.label}>Habilidades (separadas por comas)</label>
            <textarea
              className={styles.textarea}
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <div className={styles.featuresSection}>
            <h3>Funcionalidades del chat</h3>
            <div className={styles.featureToggle}>
              <span>Archivos</span>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={chatFeatures.files}
                  onChange={() => handleFeatureToggle('files')}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
            <div className={styles.featureToggle}>
              <span>Imágenes</span>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={chatFeatures.images}
                  onChange={() => handleFeatureToggle('images')}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
            <div className={styles.featureToggle}>
              <span>Audio</span>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={chatFeatures.audio}
                  onChange={() => handleFeatureToggle('audio')}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
            <div className={styles.featureToggle}>
              <span>Emoticonos</span>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={chatFeatures.emojis}
                  onChange={() => handleFeatureToggle('emojis')}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
            <div className={styles.featureToggle}>
              <span>GIFs</span>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={chatFeatures.gifs}
                  onChange={() => handleFeatureToggle('gifs')}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
            <div className={styles.featureToggle}>
              <span>Stickers</span>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={chatFeatures.stickers}
                  onChange={() => handleFeatureToggle('stickers')}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.collapseButton} onClick={toggleSidebar}>
          {isOpen ? '⮜' : '☰'}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;