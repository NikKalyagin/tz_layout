import React from 'react';
import './styles.css';

const Background = () => {
  return (
    <video autoPlay muted loop className="background" poster="/phon.png">
      <source src="/firstScreen.mp4" type="video/mp4" />
      
    </video>
  );
};

export default Background;