import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
class App extends React.Component{
  state={ lat: null, errorMessage: '' }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=> this.setState({lat: position.coords.latitude})  ,
      (err)=>this.setState({lat: err.message})
    );
  }
  renderContent() {
        if(this.state.errorMessage && !this.state.lat){
          return <div>Error {this.state.errorMessage}</div>
        }

        if(this.state.lat && !this.state.errorMessage){
          return <SeasonDisplay lat={this.state.lat}> </SeasonDisplay>
        }

        if(!this.state.errorMessage && !this.state.lat){
          return <Spinner message= "Allow Location"/>
        }
  }
//never make a call in render method, this is called many times. This method is required
  render(){
  return (<div  >{this.renderContent()}</div>)
  }
}
ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
