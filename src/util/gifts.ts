import produce from 'immer';
import { allUsers, getCurrentUser } from 'data/users';
import defaultGifts from 'data/gifts.json';
import { State } from 'types';

export function addGift(
  state: State,
  id: string,
  description: string,
  image: string,
) {
  return produce<State>(state, (draft) => {
    draft.gifts.push({
      id,
      description,
      image,
      reservedBy: undefined,
    });
  });
}

export function toggleReservation(state: State, giftId: string) {
  return produce(state, (draft) => {
    const gift = draft.gifts.find((gift) => gift.id === giftId);
    if (gift) {
      gift.reservedBy =
        gift.reservedBy === undefined
          ? state.currentUser?.id
          : gift.reservedBy === state.currentUser?.id
          ? undefined
          : gift.reservedBy;
    }
  });
}

export function getInitialState(): State {
  return {
    users: allUsers,
    currentUser: getCurrentUser(),
    gifts: defaultGifts,
  };
}
