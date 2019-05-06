export const selectSong = song => {
    console.log("SELECT SONG");
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

