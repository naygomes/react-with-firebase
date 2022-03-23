import './Modal.css';

export default function Modal({children, handleClose}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        { // O atributo children faz com que o componente identifique o filho que está dentro do componente para que ele seja utilizado
        }
        {children}
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  )
}
