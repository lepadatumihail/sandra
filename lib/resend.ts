import { Resend } from 'resend';

let instance: Resend | undefined;

export function getResend(): Resend {
  if (instance) return instance;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error('RESEND_API_KEY is not set');
  }
  instance = new Resend(key);
  return instance;
}
