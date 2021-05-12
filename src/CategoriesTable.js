const CategoriesTable = () => {
  return (
    <div className="table">
      <table style={{ width: "100%" }}>
        <tbody>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
