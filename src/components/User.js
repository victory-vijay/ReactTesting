const User = (props) => {
  return (
    <div className="userCard">
      <h2>Name : {props.name} </h2>
      <h2>Location : india </h2>
      <h2>Contact : @vijay </h2>
    </div>
  );
};

export default User;
