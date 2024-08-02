import { useState, useEffect } from "react"

export default function useFetchBitcoinPrice(currency) {

    const [price, setPrice] = useState(null);

        useEffect(() => {
            fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
                .then(response => response.json())
                .then(json => {
                    setPrice(json.bitcoin[currency.toLowerCase()]);
                })
                .catch(error => {
                    console.error("Error fetching the price inside useFetchBitcoinPrice component", error);
                    setPrice('Error');
                });
        }, [currency]);

    return [price];
}