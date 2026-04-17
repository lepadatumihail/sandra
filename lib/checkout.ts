export type Locale = 'en' | 'es';

export async function startCheckout(locale: Locale) {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ locale }),
  });

  if (!res.ok) {
    throw new Error('checkout_failed');
  }

  const { url } = (await res.json()) as { url: string };
  if (!url) {
    throw new Error('checkout_failed');
  }

  window.location.href = url;
}
