import { useState, useEffect } from 'react';

//styles
import './TripList.css';

export default function TripList() {
    const [trips, setTrips] = useState([])

    console.log(trips);

    // Com o useEffect, a cada reload do componente, a função do primeiro argumento só rodará se algum dos seus dependentes (segundo argumento) for modificado
    // Se no segundo argumento estiver vazio ([]), a função só é executada quando a página é carregada
    useEffect(() => {
        fetch('http://localhost:3000/trips')
            .then(response => response.json())
            .then(json => setTrips(json));
    }, [])

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
        </div>
    )
}
