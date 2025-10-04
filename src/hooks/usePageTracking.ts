import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const host = window.location.hostname;
    const isLocalhost = host === 'localhost' || host === '127.0.0.1' || host === '';

    if (process.env.NODE_ENV === 'production' && !isLocalhost) {
      const pagePath = location.pathname + location.search + location.hash.replace('#', '');
      ReactGA.send({ hitType: 'pageview', page: pagePath });
    }
  }, [location]);
};
