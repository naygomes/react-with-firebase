import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import EventList from './components/EventList';
import Modal from './components/Modal';
import NewEventForm from './components/NewEventForm';

function App() {
  // Hook de estado: atualiza o valor no DOM sempre que houver mudança
  const [showModal, setShowModal] = useState(false);
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

  const handleClose = () => {
    setShowModal(!showModal);
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
      {showEvents && (
        <EventList events={events} handleClick={handleClick} />
      )}

      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          { // Quando utilizamos o componente com tag abre/fecha, o que vem dentro da tag é o filho (children) desse componente
          }
          <NewEventForm />
        </Modal>
      )}
      <div className='terms-conditions'>
        <button onClick={handleClose}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
