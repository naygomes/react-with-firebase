import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

function App() {
  // Hook de estado: atualiza o valor no DOM sempre que houver mudança
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Mario's birthday bash", id: 1 },
    { title: "Luigi's live stream", id: 2 },
    { title: "Race on moo moo farm", id: 3 },
  ])

  const handleClick = (id) => {
    // Usa-se o prevEvents quando queremos garantir que os dados serão atualizados quando o filtramos.
    // Ou seja, sempre que o estado de atualização depender de um dado anterior, usamos assim
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id;
      })
    })
  }

  const subtitle = "All the latest events in Marioland";

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />
      <div>
        <button onClick={() => setShowEvents(!showEvents)}>{showEvents ? 'Hide Events' : 'Show Events'}</button>
      </div>
      { // Outra forma de fazer o template condicional acima é usando o && para fazer a condicional. Assim:
        //    { showEvents && (
        //      <div>
        //        <button onClick={() => setShowEvents(false)}>Hide Events</button>
        //      </div>
        //    )}
        //    { !showEvents && (
        //      <div>
        //        <button onClick={() => setShowEvents(true)}>Show Events</button>
        //      </div>
        //    )}
      }
      {showEvents && events.map((e, index) => (
        // As Keys ajudam o React a identificar quais itens sofreram alterações, foram adicionados ou removidos.
        // A melhor forma de escolher uma chave é usar uma string que identifica unicamente um item da lista dentre os demais.
        // Quando você não possui nenhum ID estável para os itens renderizados, você pode usar o índice do item como chave em último recurso.
        // Não recomendamos o uso de índices para chave se a ordem dos itens pode ser alterada. Isso pode impactar de forma negativa o desempenho e poderá causar problemas com o estado do componente.
        <React.Fragment key={e.id}>
          <h2>{index} - {e.title}</h2>
          {/* Quando precisar passar um parâmetro pra função, chame a função dessa forma */}
          <button onClick={() => handleClick(e.id)}>Delete event</button>
        </React.Fragment>
      ))}
      <Modal>
        { // Quando utilizamos o componente com tag abre/fecha, o que vem dentro da tag é o filho (children) desse componente
        } 
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal>
    </div>
  );
}

export default App;
