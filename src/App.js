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
  const [showVideos, setToggled] = useState(false);

  const switchStyles = useN02SwitchStyles();

  //Insert the alert message when the input field is empty:
  const [alert, setAlert] = useState("");

  const apiHelper = new ApiHelper();

  const getData = async () => {
    // alert message if the name is misspelled:
    if (query !== "") {
<<<<<<< HEAD
=======
        //2 arrays with a rearch resuts
>>>>>>> e66f94ec05f75b44ec865505c3b980022cfe8cb3
      const recipiesFound = await apiHelper.searchRecipies(query);
      const videosFound = await apiHelper.searchYouTube(query);
     

      

      //display alert message if the property is set to false:
      if (recipiesFound.length === 0) {
        return setAlert("No food found whith that name");
      }

      //get acces to the recipies array:
      setRecipes(recipiesFound);
      setVideos(videosFound);
      //window.scrollTo(0,document.querySelector(".scrollingContainer").scrollHeight);
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
<<<<<<< HEAD
        <img src='/Images/Food-jumbotron-image5.jpg'></img>
      </div>

      <h1>Food Searching App</h1>
=======
        <img src='/Images/Food-jumbotron-image5.jpg' alt="food"></img>
      </div>

      <h1>Recipe Searcher</h1>
>>>>>>> e66f94ec05f75b44ec865505c3b980022cfe8cb3
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

<<<<<<< HEAD
      <div>
=======


      <div>
          {/* buttons to switch between recipe view and video view */}
>>>>>>> e66f94ec05f75b44ec865505c3b980022cfe8cb3
        <FormControlLabel
          control={
            <Switch
              color='primary'
              classes={switchStyles}
              checked={!showVideos}
              onChange={(e) => setToggled(!e.target.checked)}
            />
          }
          label='Written recipies'
          style={{ marginRight: "100px" }}
        />
<<<<<<< HEAD

        <FormControlLabel
          control={
            <Switch
              color='secondary'
=======
  
        <FormControlLabel
          control={
            <Switch
              color='primary'
>>>>>>> e66f94ec05f75b44ec865505c3b980022cfe8cb3
              classes={switchStyles}
              checked={showVideos}
              onChange={(e) => setToggled(e.target.checked)}
            />
          }
          label='Videos'
        />
      </div>

      {!showVideos && (
        <div className='recipes'>
          {recipes !== [] &&
            recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
      )}

      {showVideos && videos.length > 0 && (
        <CarouselFrame videoIdList={videos}></CarouselFrame>
      )}
    </div>
  );
};

export default App;
