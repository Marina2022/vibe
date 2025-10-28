import React from 'react';
import MiniSpinner from "@/components-ui/miniSpinner/MiniSpinner";

const Loading = () => {
  return (
    <div style={{ height: "600px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <MiniSpinner big={true} />
    </div>
  );
};

export default Loading;