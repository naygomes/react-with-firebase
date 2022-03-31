import { useState, useEffect } from "react";

// O bom de fazer hooks customizadas é que você consegue reutilizá-las em outros componentes
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);

            try {
                const res = await fetch(url);
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(res.statusText);
                }

                setIsPending(false);
                setData(data)
                setError(null);
            } catch (error) {
                setIsPending(false);

                setError('Could not fetch the data');
                console.log(error.message);
            }

        }

        fetchData()
    }, [url])


    //sempre que você tem um hook personalizado, terá retorno na função, geralmente um array de informações
    return { data, isPending, error }
}
