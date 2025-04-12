import React, { useEffect } from 'react';

function MainPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/script.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="main-page">
      <h1>Welcome to the Website ToolHub</h1>
      <p>This is your main page converted into React.</p>
    </div>
  );
}

export default MainPage;
