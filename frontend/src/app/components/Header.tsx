import React from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

interface HeaderProps {
  brandLogo?: string;
  brandSlogan?: string;
}

const Header: React.FC<HeaderProps> = ({
  brandLogo = '/assistant_virtual.png',
  brandSlogan = 'Tu asistente virtual personalizado'
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <Image 
          src={brandLogo} 
          alt="Logo" 
          width={40} 
          height={40} 
          className={styles.logo}
        />
        <span className={styles.slogan}>{brandSlogan}</span>
      </div>
    </header>
  );
};

export default Header;