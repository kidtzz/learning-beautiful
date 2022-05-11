import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import About from "./About";

const api = "https://jsonplaceholder.typicode.com/posts";
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postRandom: [],
        };
    }
    componentDidMount() {
        axios.get(api).then((res) => {
            this.setState({
                postRandom: res.data,
            });
        });
    }
    render() {
        return (
            <div className="container">
                <About />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.postRandom.map((index) => (
                            <tr key={index.id}>
                                <td>{index.id}</td>
                                <td>{index.title}</td>
                                <td>{index.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Home;
