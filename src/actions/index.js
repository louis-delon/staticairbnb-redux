// we want to populate the state with some flats
// so we create an action action which type will be SET_FLATS
// and the payload will contain all the flats that the action manage to get

// IMP: Here we are just simulating an API call because the role of the action
// is to fetch infromations about the API

import flats from '../flats';
export function setFlats() {
 // TODO: Api call! For now, simulate a DB
 return {
 type: 'SET_FLATS',
 payload: flats
 }
  // Here we created the action
}

import flat from '../containers/flat'
export function selectFlat(flat) {
  return {
    type: 'SELECT_FLAT',
    payload: flat
  }
}
