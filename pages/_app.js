import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

/*
  Define the top-level application component
  Logic:
  - Render the main component along with ToastContainer for notifications
*/
function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <ToastContainer transition={Zoom} position="top-right" />
  </>
}

export default MyApp
