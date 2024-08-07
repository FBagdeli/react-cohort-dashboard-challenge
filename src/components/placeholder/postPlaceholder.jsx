const PlaceHolder = ({ handleInputeSubmit }) => {
  return (
    <input placeholder="whats on your mind?" onChange={handleInputeSubmit}></input>
  );
};

export default PlaceHolder;
