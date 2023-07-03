import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const User = () => {
    const navigate = useNavigate()
  const userFirstName = localStorage.getItem("userFirstName");
  const userLastName = localStorage.getItem("userLastName");
  const userEmail = localStorage.getItem("userEmail");
  const userUsername = localStorage.getItem("userUsername");
  const userAge = localStorage.getItem("userAge");
  const userPassword = localStorage.getItem("userPassword");

  const logoutData = () => {
    localStorage.removeItem("userFirstName");
    localStorage.removeItem("userLastName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userUsername");
    localStorage.removeItem("userAge");
    localStorage.removeItem("userPassword");
    navigate("/login")
  };
  const goBack = () => {
    navigate("/")
  };

  return (
    <>
      <div className="body">
        <div className="user-client">
          <div className="user-card">
            <img
              className="img-user"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAA9lBMVEX///9rgJv/zrVPYHQAAADo6OgAvNXTqpbY3uNcdJM5T2bS1toCq8JNXnH/0bfSqJP3ybBkeJEBs8rv7+//1rz09fZAVGpheJVabIMAp8CAkqhTZXpSWm5fcop2dnbuwKn/+PTi1tHMzMyhoaFbW1tQUFCTk5OhhXVBQUHjt6HPoYrbu6z/7eT/3s1zf46or7hicYKao627wMaPnrHFy9WNydWeq7zO7vSyvMkzkKc9SF8VgpuJiIg1NTUqKioVFRWvr68sIh6GbWDAnotPQTlCNC51YFRlUkiroJudemi4kX7lz8Xw0MBZusys09vB2t+p4u1z0eKx8/MzAAAGM0lEQVR4nO2beVfiOhjGW0opWxdsCwijiMt1gBllBHUWvW44js54r37/L3OT0iVvm0BwTJxzbp9/PC1p8uN5lwRURcmVK1euXLly5frfy3f12jaSrvtvTKJfnu2eF0PtnV2+HY++E3PE2t1+Ex538+8MyhxHPssOlSTQpisXxX/PZikWz6Waoy9kQTqShuJuLkFB2pHEou8tZykWJUUqW880XZRlsPzFxVIsvpfQcFx6d6FIQtps87IUi/qfBCO+vne5WTaFs/Abc1ETDnMZrsRBcykcJijsq551fbUURnw1neFlbryC1dtn4sxu7vGPM+EweFu68wqFguVZN9eUaN3uG55nYVDxCYxhDKsQyLKswf732e3coour2d31jeNZ6FXvAd3YlQEzcwqxLM9zegPDMGxjMHDQVXi7hzzbEw6DcubaK0BZoch7d2hzkgHzkIahyNuXAYNKe2Ath7EGMmDQOdxZzoKskQGDOjBHlBDMnYQEvizOuGCsBwmlvV2854MxJDS9WvGGI39xp7kSvx3o5wYXTMG7Fb9R9mdcxYQz+IdwGOM7V8rgtncvmsUdckYJZfBDXzDMT5szSkj2SDDMyO7xsji2IfirkZHNszNFMFtiYQb8MD3bFvwpjt8ZayDcmZFtcBqDYQR/9P8wNHjLyRiKLm3lF285OcIrG2nEmTQ90RkT6CefM79ksCgKnzNSUFAS87B8lASzxQPzQRKMwnOI2JIFwxEnWVFC+oOMUZSPy1g8eSzLU1ha+mItsUamMUut2ZIKs9gaiaU016KDhOTfCirKkM0yEP87Ayh/2GPsl5YzlFpLAYzBoHEknPBS2hoahkOlMQxbOoxhGxRvLMcwpDvj63pAk40RUl+XW066PqcZkKGynODb6T56TTbLnMYY9JxQwRfl2BcseX+d4c5h+gGNbYSyCRZ53oQskTek7H78mhwWX080slkscpLY1UkBb4Z98JpoEr92UD1y6TQ26YvuHlUPaiLT2D0cN01zzPAGsOju2DSb40NRwfI/VZumpmkpayIaGCNkDBpqNqufBLijTzuqNpd5oEPhLIYxQjoww+FqZ/qq2eNPJ2pFjWC0Zsoa7E0qd92jZjRaRY9Opq/kj1+bVFoqVvRezW7KGj3pdZG68eDg0VZl8grZ7E87rTlKAqOZR6mla7WUV0fJ2PDhVqvzu/ZMcXhCNZIFxnBp97FehnfGydhGPEFFnf4GSrnTUhNtxAtozUPgxON6/RHAHcYZo5kbxBStzov/9mlKoqhqW9Oo1rjH6/X6OqBJjNG0Npik9UJzTipgGrVLrEBYE7AAGtIYlO1wlsrJC1D8CfQF5QyyJq4RLYJx/wlYEM1xDEMM09qN1DStyep5fJJmmfN009b8W4+0fuymjOlmSAKalb35TGPBirOmHBbSekxTn+OV44xhTNH6vBpLucKYqB0tFLZhxV9LnAmOF0nzNduMSSqr1VSHMU0jycygDaOhp/W1UP78cNxNxtCihNVZhWXKChKxEM4anIpPpUinCqYhS6nLmGalAmcaQ1S32Z5/BHgGMIreJse8gjVlxhSkMfhco0CYJ3wZnGOWWqPyZw2zlACMOcbO+CUA45PNd0Gc+AuKFSUQJlxQaOxpAvOMjWkCXlaYVogTq67B/oTXUsj8LZXQJaDVWLWNqpuXRWfDNMBa2JpnAAONYZY2guE9ik7ZMCpZK0HWECwlH2YMs+lhGN7iZnYZLBAHVFAkzCksJXPBNNydhllMGWu08SkJ8zQGLAuM4S+nkwWTpLLm3RcS5ss7zoxB4t26KTDEvNAak4SBr7Spj68KM8k+SjrOtCZlDOPxUJOXw5CddAP22LWIZQ325w3G46vB+JQGDFopgEmsgcaQpdSg1FWH7/BJhSHf5wY9a+Bd+MDrwoCog3hE1kBjQGDaL4dxszAN+IED7pdakDVr4BbcIbuUDbPD982Nm30bKDDgmmLNAmNUGLRQfDA6FaaRuk4V1IJSQn2SBsO3U1Jg0MkBTpexZpExG9SzBB8M5dDZTr+3VNaUSgsyBvtIgeE7eJYrGTWr1WbmTqKv3759Ja+zY1N3sPhg/HJGNaTsHbaWPY311v8bmytXrly5cuXKJUD/AQfsq6TEXKAPAAAAAElFTkSuQmCC"
              alt="User"
            />
            <div className="p-div">
              <p className="p-user">{userFirstName}</p>
              <p className="p-user">{userLastName}</p>
            </div>
            <div className="text-user">
              <label style={{ fontFamily: "chillax-regular" }}>
                FirstName:
              </label>
              <p className="user-data">{userFirstName}</p>
              <label style={{ fontFamily: "chillax-regular" }}>LastName:</label>
              <p className="user-data">{userLastName}</p>
            </div>
            <div className="text-user-3">
              <label style={{ fontFamily: "chillax-regular" }}>Password:</label>
              <p className="user-data">{userPassword}</p>
              <label style={{ fontFamily: "chillax-regular" }}>Age:</label>
              <p className="user-data">{userAge}</p>
            </div>
            <div className="text-user-2">
              <label style={{ fontFamily: "chillax-regular" }}>Username:</label>
              <p className="user-data">{userUsername}</p>
              <label style={{ fontFamily: "chillax-regular" }}>Email:</label>
              <p className="user-data">{userEmail}</p>
            </div>
          </div>
          <div className="buttons-user">
          <button className="btn-user" onClick={logoutData}>Logout</button>
          <button className="btn-user-1" onClick={goBack}>Go Back</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
