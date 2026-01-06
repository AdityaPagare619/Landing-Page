import React, { Suspense } from 'react';
import { useDevice } from './contexts/DeviceContext';
import './App.css';

const DesktopApp = React.lazy(() => import('./components/DesktopApp'));
const MobileApp = React.lazy(() => import('./components/MobileApp'));

function App() {
  const { isMobile } = useDevice();
  console.log('isMobile:', isMobile);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {isMobile ? <MobileApp /> : <DesktopApp />}
      </Suspense>
    </div>
  );
}

export default App;
