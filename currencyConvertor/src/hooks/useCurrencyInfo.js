//custom hooks

import { useState, useEffect } from "react";


function useCurrencyInfo(currency){

    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())  // for converting api from string to object(JSON.parse)
        .then((res)=> setData(res[currency]))  // for getting inr or usd or etc from the api directly (value is stored in setData)

    }, [currency])
    return data
}

export  default useCurrencyInfo;