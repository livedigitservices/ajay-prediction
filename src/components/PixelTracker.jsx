import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initPixel, trackPageView } from '../utils/pixel';

export default function PixelTracker() {
  const location = useLocation();

  useEffect(() => {
    initPixel();
  }, []);

  useEffect(() => {
    trackPageView();
  }, [location]);

  return null;
}