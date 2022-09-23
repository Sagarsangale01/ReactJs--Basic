import { render } from "@testing-library/react";
import React from "react";

class Form extends React.Component{

    constructor(props){
        super(props);

        this.state = {data: 'its inital state'};
    }

    updateState = () => {
        this.setState({data: "this is a new Updated State Value"});
    }
    previousState=() => {
        this.setState({data:"its Inital state"});
    }

render(){
    return(
        
        <div>
            {/* <p>State Value Is: {this.state.data}</p>
            <button type='button' onClick={this.updateState}>Change State</button> */}

            <Content myPropsData = {this.state.data} myPropsUpdate = {this.updateState} myPropsPrevious={this.previousState}></Content>
        </div>
    );
}
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <p>State Value is : {this.props.myPropsData}</p>
                <button type="button" onMouseOver={this.props.myPropsUpdate}>Update</button>
                <button onMouseOver={this.props.myPropsPrevious}>Previous</button>
            </div>
        );
    }
}

export default Form
