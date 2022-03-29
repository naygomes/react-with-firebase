import ReactDOM from 'react-dom';
import './Modal.css';

export default function Modal({ children, isSalesModal }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal" style={{
        border: "4px solid",
        borderColor: isSalesModal ? "#ff4500" : "#555",
        textAlign: "center"
      }}>
        { // O atributo children faz com que o componente identifique o filho que está dentro do componente para que ele seja utilizado
        }
        {children}
      </div>
    </div>
  ), document.body);
}
