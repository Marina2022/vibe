'use server';

import {fetchFromServerWithAuth} from "@/features/auth/lib/fetchFromServer";

export const testAction = async()=> {
  const result  = await fetchFromServerWithAuth(`${process.env.API_URL}/period`)
  return result;

}