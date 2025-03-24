import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import Main from './components/Main';
import './i18n'; // i18n'ni faqat bir marta import qilish

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
