import { SET_SUBJECTS } from './actions';

export const subjectsInitialState = {
  list: [],
  selected: null
};

export const subjects = (state = subjectsInitialState, action) => {
  const newState = {
    [SET_SUBJECTS]: () => ({ ...state, list: ['--select--', ...action.payload] })
  }[action.type];
  return newState ? newState() : state;
};
