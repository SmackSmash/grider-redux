import { createRandomSong } from '../data';
// Import addSong action creator and useDispatch to dispatch actions
import { addSong, removeSong } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const SongPlaylist = () => {
  // useDispatch hook setup
  const dispatch = useDispatch();

  // Can use destructuring like we did with mapStateToProps
  const songPlaylist = useSelector(({ songs }) => songs);

  const handleSongAdd = song => {
    dispatch(addSong(song));
  };

  const handleSongRemove = song => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map(song => {
    return (
      <li key={song}>
        {song}
        <button onClick={() => handleSongRemove(song)} className='button is-danger'>
          X
        </button>
      </li>
    );
  });

  return (
    <div className='content'>
      <div className='table-header'>
        <h3 className='subtitle is-3'>Song Playlist</h3>
        <div className='buttons'>
          <button onClick={() => handleSongAdd(createRandomSong())} className='button is-link'>
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
};

export default SongPlaylist;
