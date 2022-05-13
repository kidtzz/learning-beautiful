// import axios from "axios";
// import React from "react";
// import { NavLink } from "react-router-dom";
// // import { NavLink } from "react-bootstrap";

// const apiAlbum = "https://jsonplaceholder.typicode.com/users";
// class News extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             users: [],
//         };
//     }
//     componentDidMount() {
//         axios
//             .get(apiAlbum, {
//                 //untuk show limit data
//                 params: {
//                     _limit: 10,
//                 },
//             })
//             .then((response) => {
//                 this.setState({
//                     users: response.data,
//                 });
//             });
//     }
//     render() {
//         return (
//             <div>
//                 <div className="container">
//                     <h2 className="text-center"> ini Album Photo</h2>
//                     <ul>
//                         {this.state.users.map((index) => (
//                             <li key={index.id}>
//                                 <NavLink
//                                     to={`/User/${index.id}`}
//                                     onClick={console.log(index.id)}
//                                 >
//                                     {index.name}
//                                 </NavLink>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         );
//     }
// }

// export default News;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const News = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`User/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        );
    }
};
export default News;
