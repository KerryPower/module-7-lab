import { useState } from "react";
import useFetchBitcoinPrice from "../FetchBitcoinPrice/FetchBitcoinPrice";
import { useMood } from "../context/EmojiContext";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export default function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [price] = useFetchBitcoinPrice(currency);
    const { isHappy } = useMood();

    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <p>1 Bitcoin = {price} {currency}</p>
            <div style={{ fontSize: '2rem' }}>
                {isHappy ? '😊' : '😞'}
            </div>
        </div>
    );
}