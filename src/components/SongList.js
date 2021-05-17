import Song from "./Song";
import CategoriesTable from "./CategoriesTable";
const SongList = ({ songs, resetSongsToFilter, setStatus, songsToFilter }) => {
  const filterGenre = [
    "indie",
    "dark-wave",
    "pop",
    "electropop",
    "folk",
    "All",
  ];

  const handleFilterButton = (event) => {
    resetSongsToFilter();
    const getValue = event.target.innerHTML;
    setStatus(getValue);
  };

  return (
    <div className="song-list">
      <div className="genreButtons">
        {filterGenre.map((genre, index) => (
          <button
            className="genreFilterBtn"
            key={index}
            onClick={handleFilterButton}
          >
            {genre}
          </button>
        ))}
      </div>
      <CategoriesTable />
      {songsToFilter.map((song) => (
        <Song
          key={song.id}
          title={song.title}
          artist={song.artist}
          genre={song.genre}
          rating={song.rating}
          song={song}
        />
      ))}
    </div>
  );
};

export default SongList;
