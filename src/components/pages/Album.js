import React from "react";
import axios from "axios";

export default class Album extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album: [],
        };
    }
    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/photos", {
                params: {
                    _limit: 2,
                },
            })
            .then((res) => {
                this.setState({
                    album: res.data,
                });
            });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="text-center pt-5"> ini Album Potos ges</h1>
                    <div className="col-lg-6 pb-5">
                        {this.state.album.map((index) => (
                            <div key={index.id}>
                                <h1>{index.title}</h1>
                                <img
                                    src={index.thumbnailUrl}
                                    alt="img-tumbnail"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
