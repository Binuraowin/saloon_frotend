import { Container, Col, Row, Card, CardBody, CardTitle } from 'reactstrap';
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Appointment = () => {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [phone, setPhone] = useState('');
    const [artists, setArtists] = useState('binura');
    const [time, setTime] = useState('8.30am-9.30am');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, artists };

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

                <Row className="mt-3">
                    <Col xs="6">
                        <label>Name:</label>
                        <input
                            className="bg-light p-2 border"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                    <Col xs="6">
                        <label>Email:</label>
                        <input
                            className="bg-light p-2 border"
                            type="email"
                            required
                            value={date}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="6">
                        <label>Date:</label>
                        <input
                            className="bg-light p-2 border"
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                    <Col xs="6">
                        <label>Phone:</label>
                        <input
                            className="bg-light p-2 border"
                            type="text"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                </Row>

                <label>Description:</label>
                <textarea
                    className="bg-light p-2 border"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <Row className="mt-3">
                    <Col xs="6">
                        <label>Consumer:</label>
                        <select
                            className="bg-light p-2 border"
                            value={artists}
                            onChange={(e) => setArtists(e.target.value)}
                        >
                            <option value="binura">binura</option>
                            <option value="owin">owin</option>
                        </select>
                    </Col>
                    <Col xs="6">
                        <label>Time:</label>
                        <select
                            className="bg-light p-2 border"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        >
                            <option value="1">8.30am-9.30am</option>
                            <option value="2">9.30am-10.30am</option>
                            <option value="3">10.30am-11.30am</option>
                            <option value="4">12.30pm-01.30pm</option>
                        </select>
                    </Col>
                </Row>



                <button>Make an Appointment</button>
            </form>
        </div>
    );
}

export default Appointment;
