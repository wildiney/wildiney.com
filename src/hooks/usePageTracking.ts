import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const usePageTracking = () => {
  useEffect(() => {
    const host = window.location.hostname;
    const isLocalhost = host === 'localhost' || host === '127.0.0.1' || host === '';

    if (process.env.NODE_ENV === 'production' && !isLocalhost) {
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
    }
  }, []);
};
