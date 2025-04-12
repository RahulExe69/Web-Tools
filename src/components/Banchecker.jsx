import React, { useEffect } from 'react';

function Banchecker() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/tools/banchecker/banchecker.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="banchecker">
      <h2>Banchecker Tool</h2>
      <p>This is the Banchecker tool converted into React.</p>
    </div>
  );
}

export default Banchecker;
