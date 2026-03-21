import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeBoafoWidget } from 'boafo-accessibility-widget';

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Fallback Boafo widget init after DOM ready
if (typeof window !== 'undefined') {
  const BOAFO_API_KEY = 'boafo_1234';
  try {
    initializeBoafoWidget(BOAFO_API_KEY);
    console.log('Boafo widget fallback init success');
  } catch (error) {
    console.error('Boafo widget fallback init error:', error);
  }
}
