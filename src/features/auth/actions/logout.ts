'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  const cookieStore = await cookies();

  // Удаляем куки с токенами
  cookieStore.delete('access_token');
  cookieStore.delete('refresh_token');
  cookieStore.delete('expires_in');

  redirect('/login');
}