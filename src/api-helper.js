import Axios from "axios";

export default function ApiHelper() {
  this.searchYouTube = async function (query) {
    const APP_KEY = "AIzaSyC1vmqOh9wq2sWTFWoN2S3U07F68WI4PDg";
    const CHANNEL_ID = "UCD5WWnRed32y3xGwmrDhUiQ";
    const MAX_RESULTS = 5;
    const URL = `https://youtube.googleapis.com/youtube/v3/search?key=${APP_KEY}&maxResults=${MAX_RESULTS}&channelId=${CHANNEL_ID}&q=${query}`;

    if (query !== "") {
      const result = await Axios.get(URL);

      var idList = [];
      result.data.items.forEach((item) => {
        idList.push(item.id.videoId);
      });

      return idList;
    } else {
      return [];
    }
  };

  this.searchRecipies = async function (query) {
    const APP_ID = "436512f9";
    const APP_KEY = "e923308e5e9f633adc29131d7bb67013";
    const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

    if (query !== "") {
      const result = await Axios.get(URL);

      if (!result.data.more) {
        return [];
      }
      return result.data.hits;
    } else {
      return [];
    }
  };
}