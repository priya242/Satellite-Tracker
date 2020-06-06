import React from "react";
class APOD extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        image:"",
        imagedate:"",
        title:"",
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
                title:data.title,
                caption:data.explanation,
            });
          });
      }
      componentDidMount() {
        this.fetchData();
      }
 render(){
    const { image,imagedate,caption,title } = this.state;
    return(
        <div className ="item5">
        <h3>{title}</h3>
        <img src={image} alt="astronomical pic of the day" /> 
        <p>Updated on : {imagedate}</p>
        <p>About : {caption}</p>
        </div>
    )
 }


}
export default APOD