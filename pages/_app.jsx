import '../styles/globals.scss';
import NavigationBar from '../components/NavigationBar';
import BigPicture from '../components/BigPicture';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return ( 
  <>
    <NavigationBar />
    <BigPicture />
    <Component {...pageProps} />
    <Footer />
  </>);
}

export default MyApp;
