import React from 'react';

function Minispinner() {
  return null;
}

const Loading = () => {
  return (
    <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Minispinner />
    </div>
  );
};

export default Loading;