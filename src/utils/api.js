const BASE_URL = 'https://validator.bonto.run';

async function fetchWithRetry(endpoint, options = {}, retries = 2, delay = 8000) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res;
  } catch (err) {
    if (retries === 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return fetchWithRetry(endpoint, options, retries - 1, delay);
  }
}

export default fetchWithRetry;