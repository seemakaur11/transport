import '../styles/globals.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 0,
      
    });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
