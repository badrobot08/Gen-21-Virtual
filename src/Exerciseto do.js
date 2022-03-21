import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar.js";
import BigImage from './Components/Content.js'
import React from "react";



function App() {

  const name ='hab'
  return (
    <div>
      <WelcomeComponent  sendName={name}/>
    </div>
  )
}




export default App;



class WelcomeComponent extends React.Component{

  render(){
    return(
      <h1>Welcome to codetrain react works for {this.props.sendName}</h1>
    )
  }
}





















// function App(props) {
//   // const element = <h1>School site</h1>;

//   // const multiLine = (
//   //   <>
//   //     <h1> Hello</h1>
//   //     <h1> Hello</h1>
//   //     <h1> Hello</h1>
//   //     <h1> Hello</h1>
//   //     <h1> Hello</h1>
//   //     <h1> Hello</h1>
//   //     <h1> Hello</h1>
//   //   </>
//   // );

//   //   console.log(props)
//   // const moreContent =' About Us'

 
//   return (
//     <div className="App">
//       {/* <NavBar  newContent={moreContent}/>
//       <BigImage /> */}
//     </div>
//   );
// }