import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    // const handleChange = (e) => {
    //     setTitle(e.target.value);
    // }

    return (
        <form className="new-event-form">
            {/* Esse atributo (htmlFor) é o equivalente ao "for" do HTML, que faz um link de qual input pertence esta label. */}
            <label>
                <span>Event Title:</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </label>

            <label>
                <span>Event Date:</span>
                <input type="date" onChange={(e) => setDate(e.target.value)} />
            </label>

            <button tpe="submit">Submit</button>
            <p>{title} - {date}</p>
        </form>
    )
}
