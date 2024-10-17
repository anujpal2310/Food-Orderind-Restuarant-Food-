import { useContext } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../utils/Context";

const About = () => {
  const { id } = useParams();
  const { user } = useContext(userContext);
  console.log(user);
  return (
    <div className="bg-yellow-50 p-10">
      <h1 className="font-bold text-2xl pb-5">About page</h1>
      <div className="flex font-bold justify-between m-3">
        <h3>{user.name}</h3>
        <h6>{user.email}</h6>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam
        quas praesentium, quam eligendi laboriosam animi! Adipisci odit nihil
        modi odio placeat beatae numquam dolorum, sapiente id ea dolorem rem
        culpa nulla asperiores nesciunt laudantium optio, voluptates eos? Nulla,
        voluptas ullam nobis quod error magnam commodi inventore labore facere
        quis?
      </p>
      <p>{`Dynamic id: ${id}`}</p>
    </div>
  );
};

export default About;
