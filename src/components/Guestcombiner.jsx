import React, { useEffect } from 'react';

function Guestcombiner() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/tools/guestcombiner/guestcombiner.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="guestcombiner">
      <h2>Guestcombiner Tool</h2>
      <p>This is the Guestcombiner tool converted into React.</p>
    </div>
  );
}

export default Guestcombiner;
