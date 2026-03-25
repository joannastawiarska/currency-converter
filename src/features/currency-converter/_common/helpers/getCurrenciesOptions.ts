import type { Currency } from "../types/currency.types";

export function getCurrenciesOptions(currencies: Currency[]) {
    return currencies.map(currency => ({ label: currency.short_code, value: currency.short_code }));
}