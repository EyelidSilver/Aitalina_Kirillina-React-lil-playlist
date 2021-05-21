import { useState, useEffect, useContext } from "react";
import SongList from "./SongList";
import NewSongForm from "./NewSongForm";
import { SongContext } from "../context/useContext";

function Home() {
  const [songs, setSongs] = useContext(SongContext);

  const saveLocalSongs = () =>
    localStorage.setItem("songs", JSON.stringify(songs));

  const getLocalSongs = () => {
    if (localStorage.getItem("songs") === null) {
      localStorage.setItem("songs", JSON.stringify([]));
    } else {
      let songLocal = JSON.parse(localStorage.getItem("songs"));
      setSongs(songLocal);
    }
  };

  const [songsToFilter, setSongsToFilter] = useState([]);

  const [status, setStatus] = useState("all");

  const handleFilter = () => {
    switch (status) {
      case "indie":
        setSongsToFilter(
          songsToFilter.filter((song) => song.genre === "indie")
        );
        break;
      case "dark-wave":
        setSongsToFilter(
          songsToFilter.filter((song) => song.genre === "dark-wave")
        );
        break;
      case "pop":
        setSongsToFilter(songsToFilter.filter((song) => song.genre === "pop"));
        break;
      case "electropop":
        setSongsToFilter(
          songsToFilter.filter((song) => song.genre === "electropop")
        );
        break;
      case "folk":
        setSongsToFilter(songsToFilter.filter((song) => song.genre === "folk"));
        break;
      case "All":
        setSongsToFilter(songs);
        break;
      default:
        setSongsToFilter(songs);
    }
  };

  //USE EFFECT
  useEffect(() => {
    getLocalSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    saveLocalSongs();
    setSongsToFilter(songs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songs]);

  useEffect(() => {
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const resetSongsToFilter = () => {
    setSongsToFilter(songs);
  };

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const id = Math.floor(Math.random() * 10000);

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeArtist = (e) => setArtist(e.target.value);
  const onChangeGenre = (e) => setGenre(e.target.value);
  const onChangeRating = (e) => setRating(e.target.value);

  const valueTitle = title;
  const valueArtist = artist;
  const valueGenre = genre;
  const valueRating = rating;

  const emptyStates = () => {
    setTitle("");
    setArtist("");
    setGenre("");
    setRating("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const song = {
      title,
      artist,
      genre,
      rating,
      id,
    };
    console.log(song);
    setSongs([
      ...songs,
      {
        title: title,
        artist: artist,
        genre: genre,
        rating: rating,
        id: id,
      },
    ]);
    emptyStates();
  };

  return (
    <div className="home">
      <NewSongForm
        onChangeTitle={onChangeTitle}
        onChangeArtist={onChangeArtist}
        onChangeGenre={onChangeGenre}
        onChangeRating={onChangeRating}
        handleSubmit={handleSubmit}
        valueTitle={valueTitle}
        valueArtist={valueArtist}
        valueGenre={valueGenre}
        valueRating={valueRating}
      />{" "}
      <SongList
        songs={songs}
        title="All songs"
        setStatus={setStatus}
        resetSongsToFilter={resetSongsToFilter}
        songsToFilter={songsToFilter}
      />{" "}
    </div>
  );
}

export default Home;
