import {combineReducers} from 'redux';

const songsReducer = () => {
    console.log('SONG REDUCER');
    return [
        {title: 'No Srubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'I Want it That Way', duration: '1:45'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    console.log('SELECT SONG REDUCER', selectedSong);
    if (action.type ==='SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});