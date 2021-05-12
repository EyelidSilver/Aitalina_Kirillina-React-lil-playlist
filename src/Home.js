import {
  useState,
  // useEffect
} from "react";
import SongList from "./SongList";
import NewSongForm from "./NewSongForm";
import CategoriesTable from "./CategoriesTable";

const Home = () => {
  const [songs, setSongs] = useState([
    {
      title: "Alien",
      artist: "Lebanon Hanover",
      genre: "dark wave",
      rating: "4",
      id: 1,
    },
    {
      title: "Pure Feeling",
      artist: "Florence + the Machine",
      genre: "Indie",
      rating: "5",
      id: 2,
    },
    {
      title: "Born to Die",
      artist: "Lana Del Rey",
      genre: "Indie",
      rating: "3",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newSongs = songs.filter((song) => song.id !== id);
    setSongs(newSongs);
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
    const song = { title, artist, genre, rating, id };
    console.log(song);
    setSongs([
      ...songs,
      {
        title: title,
        artist: artist,
        genre: genre,
        rating: rating,
        id: Math.random() * 1000,
      },
    ]);
    emptyStates();
  };

  //   useEffect(() => {
  //     console.log("use effect");
  //   }, [songs.title]);

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
      />
      <CategoriesTable />
      <SongList songs={songs} title="All songs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
