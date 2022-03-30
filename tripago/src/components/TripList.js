import React, { useState } from 'react'

export default function TripList() {
    const [trips, setTrips] = useState()
    // Esse código rodará infinitamente pois o React trabalha de forma a recarregar o componente inteiro toda vez que alguma informação é atualizada,
    // então o que acontece é que, ao atualizar o trips (linha 13), o componente é recarregado e, por consequência, o método fetch é rodado novamente
    // e com isso, ele faz uma nova chamada na API, obtendo a resposta e chamando o setTrips de novo, o que faz com que isso fique em loop infinito
    console.log(trips);
    // É feita uma chamada API para captar a responsta desse endpoint
    fetch('http://localhost:3000/trips')
    // Após termos a resposta, essa função pega o objeto da resposta e usa o método json para ter acesso ao dado 
        .then( response => response.json())
    // Quando esse dado json é retornado na função acima, nós podemos pegá-lo e fazer o que quisermos
        .then(json => setTrips(json));

    return (
        <div>
            <h2>Trip List</h2>
        </div>
    )
}
