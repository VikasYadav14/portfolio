import Navbar from '../components/Navbar';
import ChatBot from '../components/chatBot'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ChatBot />
    </>
  );
}

export default MyApp;
