import { DarkModeProvider } from '../context/DarkModeContext';
import '../styles/globals.sass';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
