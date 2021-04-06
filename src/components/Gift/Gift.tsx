import React from 'react';
import { Gift as SG, User, Users } from 'types';

type GiftProps = {
  gift: SG;
  users: Users;
  currentUser: User | null;
  onReserve: (id: string) => void;
};

const Gift: React.FC<GiftProps> = ({ gift, users, currentUser, onReserve }) => (
  <div className={`gift ${gift.reservedBy ? 'reserved' : ''}`}>
    <img src={gift.image} alt='gift' />
    <div className='description'>
      <h2>{gift.description}</h2>
    </div>
    <div className='reservation'>
      {!gift.reservedBy || gift.reservedBy === currentUser?.id ? (
        <button onClick={() => onReserve(gift.id)}>
          {gift.reservedBy ? 'Unreserve' : 'Reserve'}
        </button>
      ) : (
        <span>{users[gift.reservedBy].name}</span>
      )}
    </div>
  </div>
);
export default Gift;
