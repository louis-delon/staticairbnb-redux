const selectedFlatReducer = (state, action) => {
  // compute and return a new state
  // le reducer a besoin d'être initialisé pour la toute premiere fois
  // que le reducer est appelé par l'App(dans ce cas précis par flats)
  // in the reducer we need to handle the action
   if (state === undefined) {
   // Reducer initialisation
   return null;
   }
   // TODO: handle some actions
   // first We need to check the action type
   if (action.type === 'SELECT_FLAT') {
    return action.payload;
   } else {
    return state
   }
};

export default selectedFlatReducer;
