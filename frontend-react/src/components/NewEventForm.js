import './NewEventForm.css';

export default function NewEventForm() {
  return (
    <form className="new-event-form">
    {/* Esse atributo (htmlFor) é o equivalente ao "for" do HTML, que faz um link de qual input pertence esta label. */}
      <label>
        <span>Event Title:</span>
        <input type="text" /> 
      </label>

      <label>
        <span>Event Date:</span>
        <input type="date" /> 
      </label>

      <button tpe="submit">Submit</button>
    </form>
  )
}
