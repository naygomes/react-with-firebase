import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    // const handleChange = (e) => {
    //     setTitle(e.target.value);
    // }

    const resetForm = () => {
        setTitle('');
        setDate('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const event = {
            title: title,
            date: date,
            id: Math.floor(Math.random() * 10000)
        }
        addEvent(event);
        resetForm();
    }

    return (
        <form className="new-event-form" onSubmit={handleSubmit}>
            {/* Esse atributo (htmlFor) é o equivalente ao "for" do HTML, que faz um link de qual input pertence esta label. */}
            <label>
                <span>Event Title:</span>
                <input 
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>

            <label>
                <span>Event Date:</span>
                <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </label>

            <button>Submit</button>
        </form>
    )
}
