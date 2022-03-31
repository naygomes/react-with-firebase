import { useState, useEffect, useCallback } from 'react';

//styles
import './TripList.css';

export default function TripList() {
    const [trips, setTrips] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/trips');

    const fetchTrips = useCallback(async () => {
        const response = await fetch(url);
        const json = await response.json();
        setTrips(json);
    })

    // Com o useEffect, a cada reload do componente, a função do primeiro argumento só rodará se algum dos seus dependentes (segundo argumento) for modificado
    // Se no segundo argumento estiver vazio ([]), a função só é executada quando a página é carregada
    useEffect(() => {
        fetchTrips();
    }, [fetchTrips])

    // Quando o React compara duas funções para saber se mudou ou não, na verdade ele usa como referência de comparação lugares na memória
    // Mas a cada reavaliação, a função ocupa lugares diferentes na memória, então ele nunca vai achar um resultado que bata.

    return (
        <div className="trip-list">
            <h2>Trip List</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                ))}
            </ul>
            <div className="filters">
                <button onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}>European Trips</button>
                <button onClick={() => setUrl("http://localhost:3000/trips")}>All Trips</button>
            </div>
        </div>
    )
}
