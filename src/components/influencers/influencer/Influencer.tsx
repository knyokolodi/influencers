import React from 'react';
import './Influencer.css';

type InfluencerType = {
  profilePicture: string;
  username: string;
  userId: number;
  website: string;
};

export interface InfluencerProps {
  influencer: InfluencerType;
  onFollow: (id: number) => void;
}

const Influencer = ({ influencer, onFollow }: InfluencerProps) => {
  const { userId, profilePicture, username, website } = influencer;

  const fallBackImage = (e: any) => {
    e.target.src =
      'https://iicllhawaii.iafor.org/wp-content/uploads/sites/31/2017/02/IAFOR-Blank-Avatar-Image-1.jpg';
  };

  return (
    <>
      <div className='infuencer-container'>
        <img
          onError={fallBackImage}
          src={profilePicture}
          alt=''
          className='profile-image float-left'
        />
        <div className='influencer-text float-left'>
          <p>@{username}</p>
          <span className='text-muted'>{`${
            website ? `${website.substr(1, 20)}...` : 'No website'
          }`}</span>
        </div>

        <button className='btn-follow float-right' onClick={() => onFollow(userId)}>
          <img src='icon-follow.svg' alt='' />
          <span>Follow</span>
        </button>
        <div className='clearfix'></div>
      </div>
    </>
  );
};

export default Influencer;
