import React from 'react';
import {getUser} from "@/features/auth/lib/getUser";

const Page = async() => {

  const user = await getUser()


  return (
    <div className='container'>

      {process.env.NEXT_PUBLIC_APP_URL}/registration/{user.id}

    </div>
  );
};

export default Page;