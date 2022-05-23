import React from "react";
import axios from "axios";
import { Table, Form } from "react-bootstrap";
import About from "./About";
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postRandom: [],
        };
    }
    //get Data
    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _limit: 10,
                },
            })
            .then((res) => {
                this.setState({
                    postRandom: res.data,
                });
            });
    }

    // updateRow(id) {
    //     axios
    //         .put(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then((response) => {
    //             this.setState(response.data);
    //         });
    // }

    //Delete Data ges
    deleteRow(id, e) {
        axios
            .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                // console.log(res);
                // console.log(res.data);

                //filter if id = id search id
                const postRandom = this.state.postRandom.filter(
                    (item) => item.id !== id
                );
                this.setState({ postRandom });
            });
    }

    render() {
        return (
            <div className="container">
                <About />
                <div className="tambah-data">
                    <h2>insert Data disini</h2>
                    <div className="d-flex">
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="Insert data"
                                />
                            </Form.Group>
                        </Form>
                        <button className="btn btn-primary ">Add</button>
                    </div>
                </div>

                <Table striped bordered hover className="mb-5">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.postRandom.map((index) => (
                            <tr key={index.id}>
                                <td>{index.id}</td>
                                <td>{index.title}</td>
                                <td>{index.body}</td>
                                <td className="d-flex">
                                    <button
                                        className="mx-2 btn btn-primary"
                                        onClick={this.updateRow}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={(e) =>
                                            this.deleteRow(index.id, e)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
