import './App.css';
import { useState } from 'react';

function App() {
  // Hook de estado: atualiza o valor no DOM sempre que houver mudança
  const [name, setName] = useState('Mario');
  const [events, setEvents] = useState([
    {title: "Mario's birthday bash", id: 1},
    {title: "Luigi's live stream", id: 2},
    {title: "Race on moo moo farm", id: 3},
  ])

  const handleClick = () => {
    setName(name == 'Luigi'? 'Mario' : 'Luigi');
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      {events.map((e, index) => (
        // As Keys ajudam o React a identificar quais itens sofreram alterações, foram adicionados ou removidos.
        // A melhor forma de escolher uma chave é usar uma string que identifica unicamente um item da lista dentre os demais.
        // Quando você não possui nenhum ID estável para os itens renderizados, você pode usar o índice do item como chave em último recurso.
        // Não recomendamos o uso de índices para chave se a ordem dos itens pode ser alterada. Isso pode impactar de forma negativa o desempenho e poderá causar problemas com o estado do componente.
        <div key={e.id}>
          <h2>{e.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
