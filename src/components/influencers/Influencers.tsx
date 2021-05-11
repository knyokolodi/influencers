import React, { useEffect, useState } from 'react';
import influencersData from '../../data/follower-suggestions.json';

import Influencer from './influencer/Influencer';
import './Influencers.css';

export interface IInfluencer {
  profilePicture: string;
  username: string;
  name: string;
  biography: string;
  followers: number;
  following: number;
  isPrivate?: string;
  userId: number;
  numPosts: number;
  website: string;
  lastPost: string;
  email: string;
  pk?: number;
  engagement?: number;
  engagementScore?: number;
}

const Influencers = () => {
  const [influencers, setInfluencers] = useState<IInfluencer[] | []>(influencersData);

  const followInfluencer = (userId: number) => {
    setInfluencers(influencers.filter((influencer) => influencer.userId !== userId));
  };

  return (
    <div className='influencers-container'>
      {influencers.length > 0 ? (
        influencers.map((i: IInfluencer) => {
          return <Influencer key={i.userId} influencer={i} onFollow={followInfluencer} />;
        })
      ) : (
        <div className='p-3'>No infuencers found.</div>
      )}
    </div>
  );
};

export default Influencers;
