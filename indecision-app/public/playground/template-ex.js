function getLocation(location) {
  if (location) {
    return <p>location: {location} </p>;
  }
}

const user = {
  name: "Michael Jordan",
  age: 12
  //location: "Houston Texas"
};
const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    {user.name ? <p>{user.name} </p> : undefined}
    {user.age >= 18 && <p>Age:{user.age}</p>}
    {getLocation(user.location)}
  </div>
);
