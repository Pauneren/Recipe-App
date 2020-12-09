import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Recipe from "./components/Recipe.jsx";
import Alert from "./components/Alert.jsx";
import ApiHelper from "./api-helper";
import CarouselFrame from "./components/CarouselFrame.jsx";

import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useN02SwitchStyles } from "@mui-treasury/styles/switch/n02";

const App = () => {
  const [query, setQuery] = useState("");
  //display the recipies
  const [recipes, setRecipes] = useState([]);
  const [videos, setVideos] = useState([]);

  //
  const [showVideos, setToggled] = useState(false);

  const switchStyles = useN02SwitchStyles();

  //Insert the alert message when the input field is empty:
  const [alert, setAlert] = useState("");


  const getData = async () => {
    // alert message if the name is misspelled:
    if (query !== "") {
        //2 arrays with a rearch resuts
        //this: apiHelper


      const apiHelper = new ApiHelper();//creates objects


      const recipiesFound = await apiHelper.searchRecipies(query);//creates an array with the recipes
     // const videosFound = await apiHelper.searchYouTube(query);
      //get acces to the recipies array:
      setRecipes(recipiesFound);
      setVideos(await apiHelper.searchYouTube(query));

      

      //display alert message if the property is set to false:
      if (videos.length === 0) {
        return setAlert("No food found whith that name");
      }

      
      window.scrollTo(0,document.body.scrollHeight);

      //console.log(result);
      //Set alert to am empty string because if we find the food with the name the message will be gone
      setAlert("");
      //setQuery to an empty string to clear the search input field
      setQuery("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  //alert componets go iside the return method
  return (
    <div className='App'>
      <div className='container-cover'>
        <img src='/Images/Food-jumbotron-image5.jpg' alt="food"></img>
      </div>

      <h1>Recipe Searcher</h1>
      <form className='search-form' onSubmit={onSubmit}>
        {alert !== "" && <Alert alert={alert} />}

        <input
          type='text'
          placeholder='Search Food'
          autoComplete='off'
          onChange={onChange}
          value={query}
        />
        <input type='submit' value='search' />
      </form>


{/* Not show videos */}
      <div>
          {/* buttons to switch between recipe view and video view */}
        <FormControlLabel
          label={<span style={{ fontSize: '2rem'}}>Written recipies</span>}
          control={
            <Switch
              color='primary'
              classes={switchStyles}
              checked={!showVideos}
              onChange={(e) => setToggled(!e.target.checked)}
            />
          }
          style={{ marginRight: "100px" }}
        />
  
  {/*show videos  */}
        <FormControlLabel
          label={<span style={{ fontSize: '2rem'}}>Videos</span>}
          control={
            <Switch
              color='primary'
              classes={switchStyles}
              checked={showVideos}
              onChange={(e) => setToggled(e.target.checked)}
            />
          }
        />
      </div>
{/* condition to show recipies if the show videos is false */}
      {!showVideos && (
        <div className='recipes'>
          {recipes !== [] &&
            recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
      )}
  {/* we show videos if the app is in video mode andthe videos array lenght is bigger than 0 */}
      {showVideos && videos.length > 0 && (
        <CarouselFrame videoIdList={videos}></CarouselFrame>
      )}
    </div>
  );
};

export default App;
