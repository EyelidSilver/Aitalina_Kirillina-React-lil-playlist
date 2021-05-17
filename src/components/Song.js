import React, { useContext } from "react";
import { SongContext } from "../context/useContext";

const Song = ({song}) => {
  const [songs, setSongs] = useContext(SongContext);

  const handleDelete = () => {
    setSongs(songs.filter((item) => item.id !== song.id));
  };

  return (
    <div className="song-preview" key={song.id}>
      <h2>{song.title}</h2>
      <p>{song.artist}</p>
      <p>{song.genre}</p>
      <p>{song.rating}</p>
      <button className="deleteBtn"
       onClick={() => handleDelete(song.id)}>
        delete
      </button>
    </div>
  );
}

export default Song;
