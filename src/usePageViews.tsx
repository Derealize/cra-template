import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    if (typeof window === 'undefined' || !(window as any).derealize) return;
    (window as any).derealize.listenElement();
  }, [location]);
}
