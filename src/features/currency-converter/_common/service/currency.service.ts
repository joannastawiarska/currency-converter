import { apiClient } from "../../../../_common/services/api";
import type { Currency } from "../types/currency.types";
export type GetCurrenciesApiResponse = {
    meta: Record<string, unknown>;
    response: Currency[];
};

export type GetConvertCurrencyApiResponse = {
    meta: Record<string, unknown>;
    response: ConvertCurrencyResponse;
};

export type ConvertCurrencyResponse = {
    from: string;
    to: string;
    amount: number;
    value: number;
};

export type ConvertCurrencyParams = {
    from: string;
    to: string;
    amount: string;
}

export function getCurrencies(): Promise<Currency[]> {
    return apiClient<GetCurrenciesApiResponse>("/currencies").then((response) => response.response);
}

export function convertCurrency(params: ConvertCurrencyParams): Promise<ConvertCurrencyResponse> {
    return apiClient<GetConvertCurrencyApiResponse>("/convert", params).then((response) => response.response);
}