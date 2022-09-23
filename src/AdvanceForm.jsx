import React, { Component } from "react";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  //Validation on form Submit
  const validateForm = (data) => {
      let valid = true;
      Object.values(data.errors).forEach((val) => {
            if(val.length > 0 || data.email == '' || data.name == '' || data.age == '' || data.phoneNo == '') {
                valid = false;
            }
        }
      );
      return valid;
  }

class AdvanceForm extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            email:'', 
            name:'', 
            age:'', 
            address:'', 
            phoneNo:'',
            acceptTerms:'', 
            errors:{
                email:'', 
                name:'', 
                age:'', 
                phoneNo:'',
                acceptTerms:''
            }
        };
    }

    //Form Submit Logic
    handleSubmit = (event) => {
        const {email, name, age, address, phoneNo, acceptTerms} = this.state;
        event.preventDefault();
        if(validateForm(this.state)) {
            alert(
                `---------Your Details-------\n
                Email: ${email}
                Name: ${name}
                Age: ${age}
                Address: ${address}
                PhoneNo: ${phoneNo}
                Terms: ${acceptTerms}
                `)
        }else{
            alert('All Fields are Required.\n Errors With Form Data... \n Please check and Submit Again.')
        }
    }

    //OnChange Update State Value
    handleChange = (event) =>{

            const {name, value}  = event.target;
            let errors = this.state.errors;

            // eslint-disable-next-line default-case
            switch (name) {
                case 'email':
                    errors.email = validEmailRegex.test(value) ? '' : 'Enter Valid Email ID';
                break;
                case 'name':
                    errors.name = value.length < 5 ? 'Name must be at list 5 characters long!' : '';
                break;
                case 'age':
                    errors.age = value < 18 ? 'Age Must be greater than 18 Years !!' : '';
                break;
                case 'phoneNo': 
                    errors.phoneNo = value.length < 10 ? 'Mobile Number must be 10 digits Only!!' : value.length > 10 ? 'Mobile Number must be 10 digits Only!!' : '';
                    // errors.phoneNo = value.length < 10 ? 'Mobile Number must be 10 digits Only!!' : '';
                break;
                default:
                break;
            }

            console.log(errors);

        this.setState({
            [event.target.name]: event.target.value
        })

        this.setState({errors, [name]: value});
    } 

    //Form
    render(){
        const {errors} = this.state;
        return(
            <div className='wrapper'>
                <div className='form-wrapper'>
                  <h2>Create Account</h2>
            <form onSubmit={this.handleSubmit}>
                <div className='email'>
                    <label style={{color:"black", fontSize:16, marginLeft:20}}>Email: </label>
                    <input name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} noValidate />
                    {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                </div>
                <div className='fullName'>
                    <label style={{color:"black", fontSize:16, marginLeft:20}}>Name: </label>
                    <input name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} noValidate />
                    {errors.name.length > 0 && <span className='error'>{errors.name}</span>}
                </div>
                <div className='fullName'>
                    <label style={{color:"black", fontSize:16, marginLeft:20}}>Age: </label>
                    <input name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} noValidate />
                    {errors.age.length > 0 && <span className='error'>{errors.age}</span>}
                </div>
                <div className='fullName'>
                    <label style={{color:"black", fontSize:16, marginLeft:20}}>Address: </label>
                    <textarea name="address" value={this.state.address} onChange={this.handleChange} noValidate />
                </div>
                <div className='fullName'>
                    <label style={{color:"black", fontSize:16, marginLeft:20}}>Phone No: </label>
                    <input name="phoneNo" placeholder="Phone No" value={this.state.phoneNo} onChange={this.handleChange} noValidate />
                    {errors.phoneNo.length > 0 && <span className='error'>{errors.phoneNo}</span>}
                </div>
                <div className='fullName'>
                    <label><input name="acceptTerms" type="checkbox" value={this.state.acceptTerms} onChange={this.handleChange} noValidate />I Accept the term of services</label>
                    {/* {errors.phoneNo.length > 0 && <span className='error'>{errors.phoneNo}</span>} */}
                </div>
                <div>
                    <button>Create Account</button>
                </div>
            </form>
            </div>
            </div>
        );
    } 
}

export default AdvanceForm