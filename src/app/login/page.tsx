import React, {Suspense} from 'react';
import LoginForm from "@/features/auth/components/LoginForm/LoginForm";

const Page = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <LoginForm/>
    </Suspense>
  );
};

export default Page;