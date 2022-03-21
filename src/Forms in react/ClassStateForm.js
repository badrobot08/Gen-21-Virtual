import React, { Component } from "react";

class ClassStateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: [
        {
          personName: "Abu Bakar",
          personAge: 15,
        },
        {
          personName: "Aminata Abu",
          personAge: 19,
        },
        {
          personName: "Kofi Manu",
          personAge: 45,
        },
      ],

      userName: "",
      userAge: 0,
    };
  }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
        //used to assign input feild value to state value.
        //note name of state must be same as name of input field
        [e.target.name]:e.target.value
    })
    

  };

//update stae persons
  handleSubmit =(e)=>{
      e.preventDefault();

    const newPerson={

        personName: this.state.userName,
        personAge: this.state.userAge
    }


    this.setState({

        person:[...this.state.person,newPerson],
        userName:'',
        userAge:0
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br />
          <label>Name</label>
          <input
            placeholder="name"
            value={this.state.userName}
            name="userName"
            onChange={this.handleChange}
          />
          <br />
          <label>Age</label>
          <input
            onChange={this.handleChange}
            value={this.state.userAge}
            name="userAge"
            type={"number"}
          />
            <br/>
          <button>submit</button>
        </form>
        <hr />

        {this.state.person.map((item,index) => {
          return (
            <div key={index}>
              <h3> Name: {item.personName}</h3>
              <h3> Age: {item.personAge}</h3>
              <hr />
            </div>
          )
        })}
      </div>
    );
  }
}

export default ClassStateForm;
