import { useState } from 'react';
import LandingPage from './components/LandingPage';
import NotePage from './components/NotePage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <>
      {currentPage === 'landing' ? (
        <LandingPage onYesClick={() => setCurrentPage('note')} />
      ) : (
        <NotePage onBack={() => setCurrentPage('landing')} />
      )}
    </>
  );
}

export default App;
