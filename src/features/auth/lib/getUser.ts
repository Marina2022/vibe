'use server';

import {getUserIdFromToken} from "@/features/auth/lib/getUserFromToken";
import {logout} from "@/features/auth/actions/logout";

export const getUser = async()=>{
  const userFromToken = await getUserIdFromToken()
  const userId =  userFromToken?.iss
  if (!userFromToken?.iss) {
    await logout()
  }
  const response = await fetch(`${process.env.API_URL}/user/${userId}`, {})
  if (!response.ok) {
    await logout()
  }
  return await response.json()
}