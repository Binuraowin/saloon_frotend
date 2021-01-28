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
            <br/>
            <br/>
            <br/>
            <h2>Make an Appointment</h2>
            <form onSubmit={handleSubmit}>
                {/*<label>Blog title:</label>*/}
                {/*<input*/}
                {/*    className="bg-light p-2 border"*/}
                {/*    type="text"*/}
                {/*    required*/}
                {/*    value={title}*/}
                {/*    onChange={(e) => setTitle(e.target.value)}*/}
                {/*/>*/}
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
                <button>Make an Appointment</button>
            </form>
        </div>
        // <div>
        //     {/* --------------------------------------------------------------------------------*/}
        //     {/* Start Inner Div*/}
        //     {/* --------------------------------------------------------------------------------*/}
        //     {/* --------------------------------------------------------------------------------*/}
        //     {/* Row*/}
        //     {/* --------------------------------------------------------------------------------*/}
        //     <Card>
        //         <CardTitle className="bg-light border-bottom p-3 mb-0">
        //             <i className="mdi mdi-apps mr-2"> </i>
        //             Make an Appointment
        //         </CardTitle>
        //         <CardBody className="">
        //             <Container>
        //                 <Row>
        //                     <Col>
        //                         <div className="bg-light p-2 border">.col</div>
        //                     </Col>
        //                 </Row>
        //                 <Row className="mt-3">
        //                     <Col>
        //                         <div className="bg-light p-2 border">.col</div>
        //                     </Col>
        //                     <Col>
        //                         <div className="bg-light p-2 border">.col</div>
        //                     </Col>
        //                     <Col>
        //                         <div className="bg-light p-2 border">.col</div>
        //                     </Col>
        //                     <Col>
        //                         <div className="bg-light p-2 border">.col</div>
        //                     </Col>
        //                 </Row>
        //                 <Row className="mt-3">
        //                     <Col xs="3">
        //                         <div className="bg-light p-2 border">.col-3</div>
        //                     </Col>
        //                     <Col xs="auto">
        //                         <div className="bg-light p-2 border">
        //                             .col-auto - variable width content
        //                         </div>
        //                     </Col>
        //                     <Col xs="3">
        //                         <div className="bg-light p-2 border">.col-3</div>
        //                     </Col>
        //                 </Row>
        //                 <Row className="mt-3">
        //                     <Col xs="6">
        //                         <div className="bg-light p-2 border">.col-6</div>
        //                     </Col>
        //                     <Col xs="6">
        //                         <div className="bg-light p-2 border">.col-6</div>
        //                     </Col>
        //                 </Row>
        //                 <Row className="mt-3">
        //                     <Col xs="6" sm="4">
        //                         <div className="bg-light p-2 border">.col-6 .col-sm-4</div>
        //                     </Col>
        //                     <Col xs="6" sm="4">
        //                         <div className="bg-light p-2 border">.col-6 .col-sm-4</div>
        //                     </Col>
        //                     <Col sm="4">
        //                         <div className="bg-light p-2 border">.col-sm-4</div>
        //                     </Col>
        //                 </Row>
        //                 <Row className="mt-3">
        //                     <Col sm={{
        //                         'offset': 1,
        //                         'order': 2,
        //                         'size': 6
        //                     }}>
        //                         <div className="bg-light p-2 border">
        //                             .col-sm-6 .col-sm-order-2 .col-sm-offset-2
        //                         </div>
        //                     </Col>
        //                 </Row>
        //                 <Row className="mt-3">
        //                     <Col sm="12" md={{
        //                         'offset': 2,
        //                         'size': 8
        //                     }}>
        //                         <div className="bg-light p-2 border">
        //                             .col-sm-12 .col-md-6 .col-md-offset-3
        //                         </div>
        //                     </Col>
        //                 </Row>
        //                 <Row className="mt-3">
        //                     <Col sm={{
        //                         'offset': 1,
        //                         'size': 'auto'
        //                     }}>
        //                         <div className="bg-light p-2 border">
        //                             .col-sm .col-sm-offset-1
        //                         </div>
        //                     </Col>
        //                     <Col sm={{
        //                         'offset': 1,
        //                         'size': 'auto'
        //                     }}>
        //                         <div className="bg-light p-2 border">
        //                             .col-sm .col-sm-offset-1
        //                         </div>
        //                     </Col>
        //                 </Row>
        //             </Container>
        //         </CardBody>
        //     </Card>
        //     {/* --------------------------------------------------------------------------------*/}
        //     {/* Row*/}
        //     {/* --------------------------------------------------------------------------------*/}
        //
        //     {/* --------------------------------------------------------------------------------*/}
        //     {/* End Inner Div*/}
        //     {/* --------------------------------------------------------------------------------*/}
        // </div>
    );
}

export default Appointment;
