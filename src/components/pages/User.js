// import React from "react";

// const User = (props) => {
    
//     return (
//         <div>
//             <h1>User Details</h1>
//             {this.props.match.params.id}
//         </div>
//     );
// };

import React from "react";
import {useParams} from 'react-router-dom';

const User = () => {
const {id} = useParams();
  return (
    <>
      <h1>Product id: {id}</h1>
    </>
  );
};



// class User extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>hehe</h1>
//                 ID {this.props.match.params.id}
//             </div>
//         );
//     }
// }

export default User;
