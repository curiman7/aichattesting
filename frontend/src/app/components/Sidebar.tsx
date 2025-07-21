
import React, { useState, useRef } from 'react';
import styles from '../styles/Sidebar.module.css';

import { FaCog, FaPencilAlt, FaCheck, FaTimes } from 'react-icons/fa';

interface SidebarProps {
  isOpen?: boolean;
  toggleSidebar?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, toggleSidebar }) => {
  const [avatar, setAvatar] = useState('/assistant_virtual.png');
  const [showEdit, setShowEdit] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [assistantName, setAssistantName] = useState('Asistente Virtual');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [editEndpoint, setEditEndpoint] = useState(false);
  const [tempEndpoint, setTempEndpoint] = useState('');
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
  const handleAvatarEdit = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) setAvatar(ev.target.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <aside className={isOpen ? styles.sidebarOpen : styles.sidebarClosed}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '32px 0 16px 0', position: 'relative' }}
            onMouseEnter={() => setShowEdit(true)}
            onMouseLeave={() => setShowEdit(false)}>
            <img
              src={avatar}
              alt="Asistente Virtual"
              className={styles.avatarRect}
            />
            {showEdit && (
              <button className={styles.avatarEditBtn} onClick={handleAvatarEdit} title="Editar avatar">
                <FaPencilAlt />
              </button>
            )}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleAvatarChange}
            />
          </div>
          <div className={styles.editableField}>
            <label className={styles.label}>Nombre del asistente</label>
            <input
              className={styles.input}
              type="text"
              value={assistantName}
              onChange={e => setAssistantName(e.target.value)}
              placeholder="Nombre del asistente"
              style={{ background: '#f8f8f8', color: '#222', border: '1px solid #bbb' }}
            />
          </div>
          <div className={styles.editableField}>
            <label className={styles.label}>Descripción</label>
            <textarea
              className={styles.textarea}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Descripción del asistente"
              style={{ background: '#f8f8f8', color: '#222', border: '1px solid #bbb' }}
            />
          </div>
          <div className={styles.editableField}>
            <label className={styles.label}>Habilidades (separadas por comas)</label>
            <textarea
              className={styles.textarea}
              value={skills}
              onChange={e => setSkills(e.target.value)}
              placeholder="Ej: Responder preguntas, Dar recomendaciones, ..."
              style={{ background: '#f8f8f8', color: '#222', border: '1px solid #bbb' }}
            />
          </div>
          {showSettings && (
            <div className={styles.settingsPanel}>
            <div style={{ marginBottom: 18 }}>
                <label className={styles.label} style={{ fontWeight: 600, color: '#222' }}>Endpoint del chat</label>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: 8, flexWrap: 'nowrap', position: 'static' }}>
                  {editEndpoint && (
                    <>
                      <button
                        className={styles.avatarEditBtn}
                        style={{ width: 22, height: 22, background: '#4caf50', color: '#fff', marginRight: 2, padding: 0, position: 'relative' }}
                        onClick={() => {
                          setEndpoint(tempEndpoint);
                          setEditEndpoint(false);
                        }}
                        title="Guardar endpoint"
                        type="button"
                      >
                        <FaCheck size={12} />
                      </button>
                      <button
                        className={styles.avatarEditBtn}
                        style={{ width: 22, height: 22, background: '#f44336', color: '#fff', marginRight: 6, padding: 0, position: 'relative' }}
                        onClick={() => {
                          setTempEndpoint(endpoint);
                          setEditEndpoint(false);
                        }}
                        title="Cancelar"
                        type="button"
                      >
                        <FaTimes size={12} />
                      </button>
                    </>
                  )}
                  <input
                    className={styles.input}
                    type="text"
                    value={editEndpoint ? tempEndpoint : endpoint}
                    onChange={e => setTempEndpoint(e.target.value)}
                    placeholder="https://chat-backend.example.com/api"
                    style={{ flex: 1, background: '#f8f8f8', color: '#222', border: '1px solid #bbb', cursor: editEndpoint ? 'text' : 'pointer', minWidth: 0, position: 'relative' }}
                    readOnly={!editEndpoint}
                    onClick={() => {
                      if (!editEndpoint) {
                        setTempEndpoint(endpoint);
                        setEditEndpoint(true);
                      }
                    }}
                  />
                  {!editEndpoint && (
                    <button
                      className={styles.avatarEditBtn}
                      style={{ width: 28, height: 28, background: '#222', color: '#fff', position: 'relative' }}
                      onClick={() => { setTempEndpoint(endpoint); setEditEndpoint(true); }}
                      title="Editar endpoint"
                    >
                      <FaPencilAlt size={14} />
                    </button>
                  )}
                </div>
              </div>
              <div className={styles.featuresSection}>
                <h3 style={{ color: '#222', fontSize: 16, marginBottom: 8 }}>Funcionalidades del chat</h3>
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
          )}
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          <button className={styles.settingsBtn} onClick={() => setShowSettings(!showSettings)} title="Ajustes">
            <FaCog size={22} />
          </button>
        </div>
        <div className={styles.collapseButton} onClick={toggleSidebar}>
          {isOpen ? '⮜' : '☰'}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;