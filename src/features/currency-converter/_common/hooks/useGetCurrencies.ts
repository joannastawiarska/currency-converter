import { useEffect, useState } from "react";
import { getCurrencies } from "../service/currency.service";
import type { Currency } from "../types/currency.types";

export function useGetCurrencies() {
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCurrencies() {
            try {
                setIsLoading(true);
                const data = await getCurrencies();
                setCurrencies(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCurrencies();
    }, []);

    return { currencies, isLoading, };
}