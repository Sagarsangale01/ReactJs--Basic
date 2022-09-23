import React from "react";
import ReactDOM from "react-dom";

class Refs extends React.Component{
    constructor(props){
        super(props);
    
        this.state={data:''}
    }

    updateState = (e) =>{
        this.setState({data: e.target.value});
    }
    clearInpute = () => {
        this.setState({data: ''})
        ReactDOM.findDOMNode(this.refs.myInpute).focus();
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.data} onChange={this.updateState} ref="myInpute"/>
                <button onClick={this.clearInpute}>Clear</button>
                <h5>{this.state.data}</h5>
            </div>
        );
    }

}

export default Refs;