import React from "react";
import "./rightbar.scss";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16144369/pexels-photo-16144369/free-photo-of-fashion-sonnenbrille-frau-model.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <span>Mehdi</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16144369/pexels-photo-16144369/free-photo-of-fashion-sonnenbrille-frau-model.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <span>Mehdi</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16144369/pexels-photo-16144369/free-photo-of-fashion-sonnenbrille-frau-model.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <p>
                <span>Mehdi</span>changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16144369/pexels-photo-16144369/free-photo-of-fashion-sonnenbrille-frau-model.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <p>
                <span>Mehdi</span>liked a post
              </p>
            </div>
            <span>20 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16144369/pexels-photo-16144369/free-photo-of-fashion-sonnenbrille-frau-model.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <p>
                <span>Mehdi</span>liked a comment
              </p>
            </div>
            <span>30 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16144369/pexels-photo-16144369/free-photo-of-fashion-sonnenbrille-frau-model.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <p>
                <span>Mehdi</span>posted
              </p>
            </div>
            <span>1 day ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16144369/pexels-photo-16144369/free-photo-of-fashion-sonnenbrille-frau-model.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <div className="online"></div>
              <span>Mehdi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16144369/pexels-photo-16144369/free-photo-of-fashion-sonnenbrille-frau-model.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <div className="online"></div>
              <span>Masumeh</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16144369/pexels-photo-16144369/free-photo-of-fashion-sonnenbrille-frau-model.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <div className="online"></div>

              <span>Alisa</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16144369/pexels-photo-16144369/free-photo-of-fashion-sonnenbrille-frau-model.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <div className="online"></div>

              <span>Ali</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightBar;
