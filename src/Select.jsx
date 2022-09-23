import react from 'react';
import React from 'react';

class Select extends React.Component{
    constructor(props){
        super(props);

        this.state={car:'BMW'};
    }

    setCar=(e) =>{
        this.setState({car:e.target.value});
    }

    render(){
        return(
            <div>
                <select value={this.state.car} onChange={this.setCar}>
                    <option value=''>Select Your Car</option>
                    <option value='Volvo'>Volvo</option>
                    <option value='Honda'>Honda</option>
                    <option value="Tata">Tata</option>
                    <option value="BMW">BMW</option>
                </select>
            </div>
        );
    }

}



export default Select