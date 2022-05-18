import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-bootstrap";

const apiAlbum = "https://jsonplaceholder.typicode.com/users";
export default class News extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }
    componentDidMount() {
        axios
            .get(apiAlbum, {
                //untuk show limit data
                params: {
                    _limit: 10,
                },
            })
            .then((response) => {
                this.setState({
                    users: response.data,
                });
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="text-center"> Ini Album Photo</h2>
                    <ul>
                        {this.state.users.map((index) => (
                            <li key={index.id}>
                                <NavLink
                                    to={`User/${index.id}`}
                                    onClick={console.log(index.id)}
                                >
                                    {index.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
