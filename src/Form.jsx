import React from "react";

class Form extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            data: 'Inital Stage..'
        }
    }

    updateState = (e) => {
        this.setState({ data: e.target.value });
    }

    render(){
        return(
            <div>
                <Header />
                <Content myDataProp = {this.state.data} myUpdateProp = {this.updateState} ></Content>
                {/* <input type="text" value={this.state.data} onChange={this.updateState}/>
                <p>Updated State is : <b>{this.state.data}</b></p> */}
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return(
            <div>
                <h4>Header Section</h4>
            </div>
        );
    }
}
class Content extends React.Component{
    render(){
        return(
            <div>
                <input type="text" value={this.props.myDataProp} onChange={this.props.myUpdateProp}/>
                <p>Updated State is :<b>{this.props.myDataProp}</b></p>

            </div>
        );
    }
}

export default Form