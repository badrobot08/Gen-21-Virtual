import React,{Component} from 'react'



class ClassState extends Component {

    constructor(props){
        super(props);

        this.state = {

            counter : 0,
        }

        this.handleIncrease=this.handleIncrease.bind(this)
    }


   handleIncrease(e){
        e.preventDefault();
        
        this.setState({

            counter: this.state.counter +1
        })

        console.log(this.state.counter)
    }

    handleDecrease = (e)=>{
        e.preventDefault();
        this.setState({
            counter:this.state.counter-1
        })
    }

    render(){
        return(
            <>

            <h1>the count is: {this.state.counter}</h1>
            <br/>
            <button onClick={this.handleIncrease}>Increase</button>
            <button onClick={this.handleDecrease}> Decrease</button>
           
            </>
        )
    }
}



export default ClassState