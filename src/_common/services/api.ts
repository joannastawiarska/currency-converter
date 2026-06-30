const BASE_URL = 'https://api.currencybeacon.com/v1';

export async function apiClient<T>(
    path: string,
    params?: Record<string, string>
): Promise<T> {

    const query = params
        ? `?${new URLSearchParams(params).toString()}`
        : '';

    const response = await fetch(`${BASE_URL}${path}${query}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
        },
    });

    if (!response.ok) {
        throw new Error("API error");
    }

    return response.json();
}