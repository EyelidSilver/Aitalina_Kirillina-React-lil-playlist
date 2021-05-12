const SongList = ({ songs, title, handleDelete }) => {
  return (
    <div className="song-list">
      {/* <h2>{title}</h2> */}
      {songs.map((song) => (
        <div className="song-preview" key={song.id}>
          <h2>{song.title}</h2>
          <p>{song.artist}</p>
          <p>{song.genre}</p>
          <p>{song.rating}</p>
          <button className="deleteBtn" onClick={() => handleDelete(song.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default SongList;
