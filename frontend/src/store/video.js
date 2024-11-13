import { csrfFetch } from "./csrf";

//constants
const LOAD_VIDEO = "video/loadAllVideos";

//action creators
const loadVideos = (videos) => {
  return {
    type: LOAD_VIDEO,
    videos,
  };
};

//thunk
export const fetchAllVideos = () => async (dispatch) => {
  const response = await csrfFetch("/api/videos");
  if (response.ok) {
    const videos = await response.json();
    dispatch(loadVideos(videos));
  }
};

//reducer
const initialState = { allVideos: {} };

const videoReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_VIDEO:
      newState = { ...state, allVideos: {...state.allVideos}};
      action.videos.Videos.forEach(
        (video) => (newState.allVideos[video.id] = video)
      );
      return newState;

    default:
      return state;
  }
};


export default videoReducer