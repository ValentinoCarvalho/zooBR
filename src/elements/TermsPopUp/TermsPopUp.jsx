

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './TermsPopUp.css';

const STORAGE_KEY = 'acceptedTerms';

export const TermsPopUp = () => {
  const [displayPopUp, setDisplayPopUp] = useState(() => {
    if (typeof window === 'undefined') return true;

    const storedValue = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem('acceptedQstn');
    return storedValue !== 'true';
  });

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    localStorage.setItem('acceptedQstn', 'true');
    setDisplayPopUp(false);
  };

  if (!displayPopUp) return null;

  return (
    <section className="popUpTerms">
      <p>
        Ao usar o ZooBRA, você concorda com nossos{' '}
        <Link to="/termos-e-condicoes">termos de uso</Link>.
      </p>
      <button onClick={handleAccept}>Aceitar</button>
    </section>
  );
};
