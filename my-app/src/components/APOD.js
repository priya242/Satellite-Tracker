import React from "react";
class APOD extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        image:"",
        imagedate:"",
        caption:"",
      };
    }

    fetchData() {
        const url = "https://api.nasa.gov/planetary/apod?api_key=UBd7qenIdixIhKLT7TWlcZLV8JXxkArN34QkfdbA";
    
        //--------------------------------------fetching url-------------------------------------------------
      fetch(url)
          .then((response) => response.json())
          .then((data) => {
            return data;
            //console.log(data);
          })
          .then((data) => {
            this.setState({
                image:data.url,
                imagedate:data.date,
                caption:data.explanation,
            });
          });
      }
      componentDidMount() {
        this.fetchData();
      }
 render(){
    const { image,imagedate,caption } = this.state;
    return(
        <div className ="item-5">
        <p>Date : {imagedate}</p>
        <img src={image} alt="astronomical pic of the day" /> 
        <p>About : {caption}</p>
        </div>
    )
 }


}
export default APOD