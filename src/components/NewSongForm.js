const NewSongForm = ({
  handleSubmit,
  onChangeTitle,
  onChangeArtist,
  onChangeGenre,
  onChangeRating,
  valueTitle,
  valueArtist,
  valueGenre,
  valueRating,
}) => {
  return (
    <div className="songForm">
      <br />
      <form onSubmit={handleSubmit}>
        <input
          className="inputStyle"
          type="text"
          required
          placeholder="title"
          name="title"
          value={valueTitle}
          onChange={onChangeTitle}
        />
        <input
          className="inputStyle"
          type="text"
          required
          placeholder="artist"
          name="author"
          value={valueArtist}
          onChange={onChangeArtist}
        />
        <label htmlFor="genre">
          <select
            required
            className="inputStyle"
            name="genre"
            value={valueGenre}
            onChange={onChangeGenre}
          >
            <option value="genre">--genre--</option>
            <option value="indie">indie</option>
            <option value="dark-wave">dark-wave</option>
            <option value="pop">pop</option>
            <option value="electropop">electropop</option>
            <option value="folk">folk</option>
          </select>
        </label>
        <label htmlFor="rating">
          <select
            required
            className="inputStyle"
            name="rating"
            value={valueRating}
            onChange={onChangeRating}
          >
            <option value="--">--</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button className="addSongBtn">Add song </button>
      </form>
      <br />
    </div>
  );
};

export default NewSongForm;
