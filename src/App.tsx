import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import Main from './components/Main';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3 soniya kutish
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Komponent unmount bo'lsa tozalash
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
}
