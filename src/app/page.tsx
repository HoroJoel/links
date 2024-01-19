import React from 'react';
import Image from "next/image";
import myInfo from "./myInfo"
import './links.css';

const UserProfile = () => {
  const { name, description, buttons, footer, video, imageProfile } = myInfo.profile;

  return (
    <div className="profile-container">
      <div className="profile-video">
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <header className="profile-header">
        <div className="profile-picture">
          <Image src={imageProfile} alt="Perfil" />
        </div>
        <h1>{name}</h1>
        <p>{description}</p>
      </header>
      <div className="profile-content">
        {buttons.map((button, index) => (
          <a key={index} href={button.url} className="profile-button">
            {button.label}
          </a>
        ))}
      </div>
      <footer className="profile-footer">
        <p>{footer}</p>
      </footer>
    </div>
  );
};

export default UserProfile;
