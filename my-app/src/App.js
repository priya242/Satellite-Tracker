import React from "react";
import './style.css';
//import { render } from "react-dom";

//import Header from "./components/Header"
//import Main from "./components/Main"
//import Footer  from "./components/Footer"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nasa : [],
            isLoaded : false,
        };
    }
    
    fetchData(url){
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data.collection.items[1].href;
           
        })
        .then((data) => {
            this.setState({
                nasa : data,
                isLoaded: true,
            });
        })
      // .catch((error) = console.log(error));
    }
    componentDidMount() {
    const url = 'https://images-api.nasa.gov/asset/ISS%204K%20Crew%20Earth%20Observations';
    this.fetchData(url);
} 
render() {
    const { nasa,isLoaded } = this.state;
    return (
        <React.Fragment>
            <h1>Satellite Tracker</h1>
            {!isLoaded && <p>Loading...</p>}

            <video autoPlay controls muted loop
                 src = {nasa} type = "video/mp4" />                             
             </React.Fragment>     
      )
}

}
export default App