import React from "react";
import "./index.scss";
const Profile = () => {
  return (
    <>
      <div className="user">
        <p className="p-user">Profile</p>
        <div className="profile-admin">
          <div className="profile-images">
            <img
              className="profile-img"
              src="https://www.diabetes.co.uk/wp-content/uploads/2019/01/Untitled-design138-1000x600.jpg"
              alt=""
            />
          </div>
          <div className="profile-text">
            <div className="user-display">
              <div className="user-image">
                <img className="user-img"
                  src="https://avatars.githubusercontent.com/u/91851013?v=4"
                  alt=""
                />
              </div>
              <div className="users-info">
                <p className="users-p">Subhan Naghiyev</p>
                <p className="users-p-2">naghiyevsubhan2003@gmail.com</p>
              </div>
            </div>
            <div className="user-private">
            <div className="users-info-private">
            <p className="full">Full Name : <span style={{color:"deeppink"}}> Subhan Naghiyev</span></p>
            <p className="mobile">Mobile : <span style={{color:"deeppink"}}> +994 55 378 32 04</span></p>
            <p className="email">Email : <span style={{color:"deeppink"}}> naghiyevsubhan2003@gmail.com</span></p>
            </div>
            <div className="user-info-private">
              <p className="username">Username : <span style={{color:"deeppink"}}> Subhan777</span></p>
              <p className="birthday">Birthday : <span style={{color:"deeppink"}}> 10.07.2003</span></p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
