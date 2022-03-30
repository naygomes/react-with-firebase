import { useState, useRef } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
    // const [title, setTitle] = useState('');
    // const [date, setDate] = useState('');
    const title = useRef();
    const date = useRef();
    const [location, setLocation] = useState("Manchester");
    // const handleChange = (e) => {
    //     setTitle(e.target.value);
    // }

    const resetForm = () => {
        title.current.value = "";
        date.current.value = "";
        setLocation("Manchester");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const event = {
            title: title.current.value,
            date: date.current.value,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        console.log(event)
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
                    ref={title}
                />
            </label>

            <label>
                <span>Event Date:</span>
                <input
                    type="date"
                    ref={date}
                />
            </label>

            <label>
                <span>Event Location:</span>
                <select onChange={(e) => setLocation(e.target.value)}>
                    <option value="Manchester">Manchester</option>
                    <option value="London">London</option>
                    <option value="Cardiff">Cardiff</option>

                </select>
            </label>

            <button>Submit</button>
        </form>
    )
}
