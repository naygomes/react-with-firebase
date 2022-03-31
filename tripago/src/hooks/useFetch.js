import { useState, useEffect } from "react";

// O bom de fazer hooks customizadas é que você consegue reutilizá-las em outros componentes
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [ isPending, setIsPending ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);
            const res = await fetch(url);
            console.log(url);

            const data = await res.json();

            setIsPending(false);
            setData(data)
        }

        fetchData()
    }, [url])


    //sempre que você tem um hook personalizado, terá retorno na função, geralmente um array de informações
    return { data, isPending }
}
