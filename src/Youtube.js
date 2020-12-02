

import React, { Component } from 'react';




//https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyC6nN-WcT6_fT4zOvsST4flPyClkuIO3SI

//https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

var API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';

API = 'AIzaSyC6nN-WcT6_fT4zOvsST4flPyClkuIO3SI';

const channelID ='UCXgGY0wkgOzynnHvSEVmE3A';
const result = 5;

var finalURL = `https://youtube.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=dae&maxResults=${result}`;

finalURL = 'https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyC6nN-WcT6_fT4zOvsST4flPyClkuIO3SI';

finalURL = `https://youtube.googleapis.com/youtube/v3/search?key=${API}`;
 
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
    })
    .catch((error) => {
      console.error(error);
    });
 
       
    }


    render(){

    
        return(
            <div>
                <button onClick={this.clicked}>Watch Recipies</button>
                <div className = "youtube">
                    
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/G-qp3NRR1Y0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                </div>
        );
    }
}

export default Youtube;

