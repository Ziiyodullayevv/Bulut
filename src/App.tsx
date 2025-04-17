import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import Main from './components/Main';
import './i18n';
import { Toaster } from 'sonner';
import { useEffect, useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll logikasi
  useEffect(() => {
    if (!isLoading) {
      const path = window.location.pathname;

      const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

      switch (path) {
        case '/order':
          scrollToId('order');
          break;
        case '/partners':
          scrollToId('partners');
          break;
        case '/about':
          scrollToId('about');
          break;
        case '/contact':
          scrollToId('contact');
          break;
        default:
          break;
      }
    }
  }, [isLoading]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <Main />
      <Toaster position='bottom-right' offset={50} />
      <Footer />
    </>
  );
}
