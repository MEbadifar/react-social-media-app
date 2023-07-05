import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporery dammie data
  const stories = [
    {
      id: 1,
      name: "Mehdi",
      img: "https://images.pexels.com/photos/15846364/pexels-photo-15846364/free-photo-of-fashion-frau-model-dach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      name: "Ali",
      img: "https://images.pexels.com/photos/15846364/pexels-photo-15846364/free-photo-of-fashion-frau-model-dach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "Masum",
      img: "https://images.pexels.com/photos/15846364/pexels-photo-15846364/free-photo-of-fashion-frau-model-dach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      name: "Amir",
      img: "https://images.pexels.com/photos/15846364/pexels-photo-15846364/free-photo-of-fashion-frau-model-dach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
