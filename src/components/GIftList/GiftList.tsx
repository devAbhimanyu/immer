import { useState } from 'react';
import { addGift, getInitialState, toggleReservation } from 'util/gifts';
import { Gift } from 'components';
import { v4 as uuidv4 } from 'uuid';

function GiftList() {
  const [state, setState] = useState(() => getInitialState());
  const { users, gifts, currentUser } = state;

  const handleAdd = () => {
    const description = prompt('Gift to add');
    if (description)
      setState((state) =>
        addGift(
          state,
          uuidv4(),
          description,
          'https://picsum.photos/200?q=' + Math.random(),
        ),
      );
  };

  const handleReserve = (id: string) => {
    setState((state) => toggleReservation(state, id));
  };

  return (
    <div className='app'>
      <div className='header'>
        <h1>Hi, {currentUser?.name}</h1>
      </div>
      <div className='actions'>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className='gifts'>
        {gifts.map((gift) => (
          <Gift
            key={gift.id}
            gift={gift}
            users={users}
            currentUser={currentUser}
            onReserve={handleReserve}
          />
        ))}
      </div>
    </div>
  );
}

export default GiftList;
