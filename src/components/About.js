import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About us page</h1>
      <User name={"Vijay"} location={"bharat"} contact={"@bharat"} />
      <UserClass name={"class based"} location={"india"} contact={"@vijay"} />
    </div>
  );
};

export default About;
