import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../../store/firebase';

const AnalyticsComponent = () => {
  const location = useLocation();

  useEffect(() => {
    logEvent(analytics, 'route_visit', { path: location.pathname });
    // analytics().logEvent('screen_view', { screen_name: hash.substring(1) });
  }, [location.pathname]);

  return null;
};

export default AnalyticsComponent;
