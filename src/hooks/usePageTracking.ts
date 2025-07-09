import { useEffect } from 'react';
import ReactGA from 'react-ga4'

export const usePageTracking = (title: string) => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: `${window.location.pathname}${window.location.search}`,
      title: title
    });
  }, [title])
}