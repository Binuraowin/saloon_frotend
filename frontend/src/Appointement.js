import { Container, Col, Row, Card, CardBody, CardTitle } from 'reactstrap';
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Appointment = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [author, setAuthor] = useState('binura');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Make an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <label>Date:</label>
                <input
                    className="bg-light p-2 border"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <label>Description:</label>
                <textarea
                    className="bg-light p-2 border"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Consumer:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="binura">binura</option>
                    <option value="owin">owin</option>
                </select>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="binura">binura</option>
                    <option value="owin">owin</option>
                </select>
                <button>Make an Appointment</button>
            </form>
        </div>
    );
}

export default Appointment;
