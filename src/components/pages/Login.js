import React from "react";
import { Form, Button } from "react-bootstrap";

export default class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state({
    //         Postman: [],
    //     });
    // }
    // componentDidMount() {}
    render() {
        return (
            <div className="Login p-5 mt-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submmit
                </Button>
            </div>
        );
    }
}
