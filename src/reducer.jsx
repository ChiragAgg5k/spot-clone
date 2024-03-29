export const initialState = {
	user: null,
	playLists: [],
	item: new Audio(),
	currentlyPlaying: {
		name: null,
		artist: null,
		albumcover: null
	},
	token: null,
	tracks: [],
	selectedPlayList: null,
	followedArtists: []
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state, // keep whatever is in the current state
				user: action.user // update the user with the user that was passed in
			};

		case "SET_TOKEN":
			return {
				...state,
				token: action.token
			};

		case "SET_PLAYLISTS":
			return {
				...state,
				playLists: action.playLists
			};

		case "SET_SELECTED_PLAYLIST":
			return {
				...state,
				selectedPlayList: action.selectedPlayList
			};

		case "SET_TRACKS":
			return {
				...state,
				tracks: action.tracks
			};

		case "SET_CURRENTLY_PLAYING":
			return {
				...state,
				currentlyPlaying: action.currentlyPlaying
			};

		case "SET_VOLUME":
			state.item.volume = action.volume;
			return {
				...state,
				volume: action.volume
			};

		case "SET_PLAYING":
			if (action.playing) {
				if (state.currentlyPlaying.name === null) {
					return state;
				}
				state.item.play();
			} else {
				state.item.pause();
			}
			return {
				...state,
				playing: action.playing
			};

		case "SET_FOLLOWED_ARTISTS":
			return {
				...state,
				followedArtists: action.followedArtists
			};

		default:
			return state;
	}
};

export default reducer;
