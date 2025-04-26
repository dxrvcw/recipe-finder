import { notFound } from 'next/navigation';
import qs from 'query-string';

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.SPOONACULAR_API_KEY;

export interface FetchOptions {
  revalidate?: number;
}

export async function apiFetch<T, U>(
  endpoint: string,
  params?: U,
  options: FetchOptions = {}
): Promise<T> {
  try {
    const query = qs.stringify(
      {
        ...params,
        apiKey: API_KEY,
      },
      { skipEmptyString: true, skipNull: true }
    );

    const url = `${API_BASE_URL}${endpoint}?${query}&apiKey=${API_KEY}`;

    const res = await fetch(url, {
      next: { revalidate: options?.revalidate },
    } as RequestInit);

    if (!res.ok) {
      if (res.status === 404) {
        notFound();
      }

      throw new Error('API request failed');
    }

    return res.json() as Promise<T>;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
