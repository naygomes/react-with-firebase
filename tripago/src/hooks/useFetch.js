import { useState, useEffect } from "react";

// O bom de fazer hooks customizadas é que você consegue reutilizá-las em outros componentes
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            console.log(url);

            const data = await res.json();

            setData(data)
        }

        fetchData()
    }, [url])


    //sempre que você tem um hook personalizado, terá retorno na função, geralmente um array de informações
    return { data }
}
