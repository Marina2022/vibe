import React from 'react';
import RegistrationForm from "@/features/auth/components/RegistrationForm/RegistrationForm";

interface PageProps {
  params: { value: string };
}

const Page = async ({ params }: PageProps) => {

  const { value } = await params;

  return (
    <div className='container'>
      <RegistrationForm refLink={value} />
    </div>
  );
};

export default Page;