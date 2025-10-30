import React, {Suspense} from 'react';
import SpinnerWrapper from "@/components-ui/SpinnerWrapper/SpinnerWrapper";
import MiniSpinner from "@/components-ui/miniSpinner/MiniSpinner";
import LoginForm from "@/features/auth/components/LoginForm/LoginForm";

const Page = () => {
  return (
    <Suspense fallback={<SpinnerWrapper><MiniSpinner big={true} /></SpinnerWrapper> }>
      <LoginForm/>
    </Suspense>
  );
};

export default Page;