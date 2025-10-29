import React from 'react';
import RegistrationFormBlockModule from "@/features/auth/components/RegistrationFormBlock/RegistrationFormBlock.module";

interface PageProps {
  params: { value: string };
}

const Page = async ({ params }: PageProps) => {

  const { value } = await params;

  return (
    <div className='container'>
      <RegistrationFormBlockModule refLink={value} />
    </div>
  );
};

export default Page;