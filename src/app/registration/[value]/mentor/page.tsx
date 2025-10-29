import React from 'react';
import RegistrationFormBlock from "@/features/auth/components/RegistrationFormBlock/RegistrationFormBlock";

interface PageProps {
  params: { value: string };
}

const Page = async({ params }: PageProps) => {

  const { value } = await params;

  return (
    <div className='container'>
      <RegistrationFormBlock login={value} />
    </div>
  );
};

export default Page;