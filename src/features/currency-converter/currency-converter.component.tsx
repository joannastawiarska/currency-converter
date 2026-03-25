import { Input } from "../../design-system/input.component";
import { Select } from "../../design-system/select.component";
import styles from "./currency-converter.module.css";
import { useGetCurrencies } from "./_common/hooks/useGetCurrencies";
import { getCurrenciesOptions } from "./_common/helpers/getCurrenciesOptions";
import { Typography } from 'antd';
import { useState } from "react";
import { useConvertCurrency } from "./_common/hooks/useConvertCurrency";

const { Title, Text } = Typography;

const DEFAULT_FROM_AMOUNT = 100;
const DEFAULT_FROM_CURRENCY = 'PLN';
const DEFAULT_TO_CURRENCY = 'USD';

export const CurrencyConverter: React.FC = () => {

    const { currencies, isLoading } = useGetCurrencies();
    const [fromAmount, setFromAmount] = useState(DEFAULT_FROM_AMOUNT);
    const [fromCurrency, setFromCurrency] = useState(DEFAULT_FROM_CURRENCY);
    const [toCurrency, setToCurrency] = useState(DEFAULT_TO_CURRENCY);
    const { isConverting, convertedValue } = useConvertCurrency(
        { from: fromCurrency, 
            to: toCurrency, 
            amount: fromAmount ? fromAmount.toString() : '0'
        });

    return (
        <div className={styles.ConverterBox}>
            <Title>Currency Converter</Title>
            <div className={styles.CurrencyRow}>
                <Text style={{width: 40}}>From:</Text>
                <Input
                    style={{ width: 300 }}
                    type={'number'}
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value ? parseFloat(e.target.value) : 0)}
                />
                <Select
                    style={{ width: 100 }}
                    loading={isLoading}
                    value={fromCurrency}
                    onChange={(e: string) => setFromCurrency(e)}
                    options={getCurrenciesOptions(currencies)} />
            </div>
            <div className={styles.CurrencyRow}>
                <Text style={{width: 40}}>To:</Text>
                <Input
                    style={{ width: 300, color: 'black', cursor: 'auto' }}
                    disabled
                    value={isConverting ? 'Converting...' : convertedValue}
                />
                <Select
                    style={{ width: 100 }}
                    value={toCurrency}
                    options={getCurrenciesOptions(currencies)}
                    onChange={(e: string) => setToCurrency(e)}

                />
            </div>
            <div>
                <Text italic>Joanna Stawiarska</Text>
            </div>
        </div>
    )
}