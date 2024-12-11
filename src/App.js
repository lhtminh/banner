import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const images = [
    "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>Tuan Minh</h1>
      </header>
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <h2 style={styles.sidebarTitle}>My Portfolio</h2>
          <ul style={styles.sidebarList}>
            <li style={styles.sidebarItem}>Activities</li>
            <li style={styles.sidebarItem}>Awards</li>
            <li style={styles.sidebarItem}>Academics</li>
          </ul>
        </div>
        <div style={styles.mainContent}>
          <div style={styles.scrollView}>
            <div style={styles.carousel}>
              <button style={styles.button} onClick={goToPrevious}>
                ❮
              </button>
              <div
                style={{
                  ...styles.imageContainer,
                  backgroundImage: `url(${images[currentIndex]})`,
                }}
              ></div>
              <button style={{ ...styles.button, right: 0 }} onClick={goToNext}>
                ❯
              </button>
              <div style={styles.dots}>
                {images.map((_, index) => (
                  <span
                    key={index}
                    style={{
                      ...styles.dot,
                      backgroundColor: currentIndex === index ? 'green' : 'gray',
                    }}
                    onClick={() => setCurrentIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
            
            <div style={styles.additionalContent}>
              <p>Email: lehoangtuanminh@gmail.com</p>
              <p>Phone number: 84+ 362392636</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  app: {
    backgroundColor: '#34495e', 
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '2em',
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    flex: 1,
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#34495e',
    color: '#ecf0f1',
    padding: '20px',
    boxSizing: 'border-box',
  },
  sidebarTitle: {
    fontSize: '1.5em',
    marginBottom: '20px',
  },
  sidebarList: {
    listStyleType: 'none',
    padding: 0,
  },
  sidebarItem: {
    marginBottom: '15px',
    cursor: 'pointer',
    fontSize: '1.2em',
    transition: 'color 0.3s',
  },
  mainContent: {
    flexGrow: 1,
    backgroundColor: '#34495e', 
    color: '#ecf0f1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  scrollView: {
    width: '100%',
    height: '100%',
    overflowY: 'auto', 
    padding: '20px',
    boxSizing: 'border-box',
  },
  carousel: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '600px',
    height: '400px',
    margin: '0 auto',
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 0.5s ease-in-out',
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    padding: '10px',
    zIndex: 2,
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '10px',
    width: '100%',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    margin: '0 5px',
    cursor: 'pointer',
  },
  additionalContent: {
    marginTop: '20px',
    color: '#ecf0f1',
    fontSize: '1em',
  },
};

export default App;