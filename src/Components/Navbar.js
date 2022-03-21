import React from "react";

function NavBar(props) {
  return (
    <div>
      <nav style={{ display: "flex", flexDirection: "row", backgroundColor:'grey' }}>
        <h1> Nav bar</h1>
        <div style={{ display:'flex',alignContent:'space-around',marginTop: 30,display:'flex',marginLeft:700}}>
          <a href="vhf"> Home</a>
          <a href="vhf"> About us</a>
          <a href="vhf"> contact</a>
          <a href="vhf"> {props.newContent}</a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
