import React from "react";
import "./style.css";

// // function FriendCard(props) {
// //   return (
// //     <span onClick={() => props.removeFriend(props.id)} className="remove">
// //       <div className="card">
// //         <div className="img-container">
// //           <img alt={props.name} src={props.image} />
// //         </div>
// //       </div>
// //     </span>
// //   );
// // }

function FriendCard(props) {
  return (
    <div
      onClick={() => {
        props.didAClick(props.id);
      }}
      className="test"
    >
      <div className="card">
        <div className="img-container">
          <img alt={props.id} src={props.image} />
        </div>
      </div>
    </div>
  );
}

// const FriendCard = props => (
//   <div onClick={() => props.setClicked(props.id)} className="card col-md-3">
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//   </div>
// );
export default FriendCard;
