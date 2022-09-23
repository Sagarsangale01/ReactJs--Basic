import React from 'react'
import Form from './AdvanceForm'


// class Car extends React.Component{
//   constructor(props){
//     super(props);
//     // this.state = {
//     //   brand: 'Honda',
//     //   model: 'City',
//     //   color: 'White',
//     //   Year: '2021'
//     // };
//     // this.state = {show:true};
//     this.state = {username: ''};
//   }
//   // delHeader = () => {
//   //   this.setState({show:false});
//   // }
//     myChangeHandler = (event) => {
//       this.setState({ username: event.target.value});
//     }
//   // static getDerivedStateFromProps(props, state){
//   //   return { color: props.col };
//   // }
//   // changeColor = () => {
//   //   this.setState({color:'blue', brand:'BMW', model:'X6'});
//   // } 
//   mySubmitHandler = (event) => {
//     event.preventDefault();
//     document.getElementById('div2').innerHTML = ("Entered Value is: "+ this.state.username);
//   }
//   render(){
//     // let myheader;
//     // if(this.state.show){
//     //   myheader = <Child />;
//     // }
//     return(
//       // <div>
//       //   {myheader}
//       //   <h5>My {this.state.brand} {this.state.model} Cars Details</h5>
//       //   <p>Hello I have {this.state.brand}'s {this.state.color} colors {this.state.model} Car. which is purchesed in {this.state.Year}. </p>
//       //   <button type="button" onClick={this.delHeader}>delete Header</button>
//       // </div>
//       <div>
//         <form onSubmit={this.mySubmitHandler}>
//           <h5>Hello { this.state.username }</h5>
//           <p data-myattribute = "somevalue">Enter Your Name:</p>
//           <input type="text" onChange={ this.myChangeHandler } />
//           <input type='submit' />
//         </form>
//         <div id="div2"></div>  
//       </div>
      
//     );
//   }
// }

// class Child extends React.Component{
//   componentWillUnmount(){
//     alert("The component name Header is about to be unmounted");
//   }
//   render(){
//     return(
//       <h1>Hello World!!</h1>
//     );
//   }
// }

const App = ()=>{
  return(
    <Form />
  );
}

export default App;
// ReactDOM.render(<Car />, document.getElementById('root'));