

import React, { Component } from 'react';




//https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyC6nN-WcT6_fT4zOvsST4flPyClkuIO3SI

//https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10



const API = 'AIzaSyC6nN-WcT6_fT4zOvsST4flPyClkuIO3SI';

const channelID ='UCD5WWnRed32y3xGwmrDhUiQ';

const result = 2;

//var finalURL = `https://youtube.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=dae&maxResults=${result}`;

var finalURL = `https://youtube.googleapis.com/youtube/v3/search?key=${API}&maxResults=${result}&channelId=${channelID}`;
 
//Create a youtube class
class Youtube  extends Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this)
    }

    //Method clicked
    clicked(){
//         fetch(finalURL)
//     .then((response) => response.json())
//     .then((responseJson) => {
//      //console.log(responseJson);
//      const resultyt = responseJson.items.map(obj => obj.id.videoId)
//     })
//    //  this.setState({resultyt})



   fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      const resultyt = responseJson.items.map(obj => obj.id.videoId)
      this.setState({resultyt});
    })
    .catch((error) => {
      console.error(error);
    });
 
       
    }


    render(){

        console.log(this.state.resultyt)
        return(
            <div>
                <button onClick={this.clicked}>Watch Recipies</button>
                <div className = "youtube">
                {this.state.resultyt !== [] && 
                this.state.resultyt.map(id  =>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)}
                       
                </div>
                </div>
        );
    }
}

export default Youtube;

