'use server';

import { cookies } from 'next/headers';

interface DecodedJWT {
  sub: string; // логин
  iss: string; // id пользователя
}

export async function getUserIdFromToken(): Promise<DecodedJWT | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('access_token')?.value;

  if (!token) return null;

  try {
    // access_token = header.payload.signature
    const [, payloadBase64] = token.split('.');

    if (!payloadBase64) return null;

    // декодируем из base64
    const payloadJson = Buffer.from(payloadBase64, 'base64').toString('utf-8');

    const decoded: DecodedJWT = JSON.parse(payloadJson);

    return {
      sub: decoded.sub,
      iss: decoded.iss,
    };
  } catch (e) {
    console.error('Ошибка при декодировании токена', e);
    return null;
  }
}
