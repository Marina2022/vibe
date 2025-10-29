import React from 'react';
import MiniSpinner from "@/components-ui/miniSpinner/MiniSpinner";
import SpinnerWrapper from "@/components-ui/SpinnerWrapper/SpinnerWrapper";

const Loading = () => {
  return (
    <SpinnerWrapper>
      <MiniSpinner big={true} />
    </SpinnerWrapper>
  );
};

export default Loading;