import { Component } from "react";

export default class MyClass extends Component{
    constructor(props){
        super()

        this.state={
            y:0,
            color:"red"
        }
    }
    inc = ()=>{
        this.setState({y:this.state.y+1})
    }

    changeColor = ()=>{
        this.setState({color:"green"})
    }
    render(){
        return(
            <>
            <h1>THIS IS A CLASS COMPONENT</h1>
            <h1>{this.props.flower}</h1>

            <h1>THE VALUE OF Y IS:{this.state.y}</h1>
            <button onClick={this.inc}>INCREMENT</button>

            <div style={{height:"300px",width:"300px",backgroundColor:this.state.color}}></div>

            <button onClick={this.changeColor}>CHANGE DIV COLOR</button>
            </>
        )
    }
}