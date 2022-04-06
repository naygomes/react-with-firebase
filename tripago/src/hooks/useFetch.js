import { useState, useEffect, useRef } from "react";

// O bom de fazer hooks customizadas é que você consegue reutilizá-las em outros componentes
export const useFetch = (url, _options) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    // Usamos useRef para envolver um argumento do tipo objeto/array o qual é uma dependência do useEffect
    const options = useRef(_options).current;

    // É sempre uma boa prática quando você usar o useEffect, se estiver fazendo algo assíncrono,
    // retornar o método cleanup para abortar a request
    useEffect(() => {
        console.log(options)
        const controller = new AbortController();

        const fetchData = async () => {
            setIsPending(true);

            try {
                const res = await fetch(url, { signal: controller.signal });
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(res.statusText);
                }

                setIsPending(false);
                setData(data)
                setError(null);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log('the fetch was aborted');
                } else {
                    setIsPending(false);

                    setError('Could not fetch the data');
                    console.log(error.message); 
                }
            }

        }

        fetchData()

        return () => {
             controller.abort();
        }
    }, [url, options])


    //sempre que você tem um hook personalizado, terá retorno na função, geralmente um array de informações
    return { data, isPending, error }
}
