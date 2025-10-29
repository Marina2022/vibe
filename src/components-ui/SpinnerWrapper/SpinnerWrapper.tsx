import React from 'react';

const SpinnerWrapper = ({children}:{children: React.ReactNode}) => {
  return (
    <div style={{ height: "90vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {children}
    </div>
  );
};

export default SpinnerWrapper;