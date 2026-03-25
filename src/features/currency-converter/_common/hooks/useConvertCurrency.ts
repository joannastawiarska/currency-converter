import { useEffect, useState } from "react";
import { convertCurrency, type ConvertCurrencyParams } from "../service/currency.service";


export function useConvertCurrency({ from, to, amount }: ConvertCurrencyParams) {

    const [convertedValue, setConvertedValue] = useState('');
    const [isConverting, setIsConverting] = useState(false);

    useEffect(() => {
        async function convert() {
            try {
                setIsConverting(true);
                const data = await convertCurrency({ from, to, amount });
                setConvertedValue(data.value.toFixed(2));
            } catch (error) {
                console.log(error);
            } finally {
                setIsConverting(false);
            }
        }
        convert();
    }, [from, to, amount]);

    return { convertedValue, isConverting };

}