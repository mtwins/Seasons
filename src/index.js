import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{

  //initlize state in constructor
  constructor(props){
    //React.compontent constrcutor call
    super(props);
    //part of React.Compontent, need to init here with null
    this.state={ lat: null, errorMessage: '' }
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        //need to call the setState function
        this.setState({lat: position.coords.latitude})
      },
      (err)=>{
        this.setState({lat: err.message})
      }
    );

  }
//never make a call in render method, this is called many times
  render(){

    if(this.state.errorMessage && !this.state.lat){
      return <div>Error {this.state.errorMessage}</div>
    }

    if(this.state.lat && !this.state.errorMessage){
      return <div>Lat {this.state.lat}</div>
    }

    if(!this.state.errorMessage && !this.state.lat){
      return <div>Loading</div>
    }
  }
}
ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
