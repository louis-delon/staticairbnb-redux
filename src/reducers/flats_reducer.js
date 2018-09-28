const flatsReducer = (state, action) => {
  // compute and return a new state
  // le reducer a besoin d'être initialisé pour la toute premiere fois
  // que le reducer est appelé par l'App(dans ce cas précis par flats)
  // in the reducer we need to handle the action
   if (state === undefined) {
   // Reducer initialisation
   return [];
   }
   // TODO: handle some actions
   // first We need to check the action type
   if (action.type === 'SET_FLATS') {
    return action.payload;
   } else {
    return state
   }
};

export default flatsReducer;

// équivaut à  ça: il n'est pas nécessaire de nommer la fonction

// export default function(state, action) {
  // if (state === undefined) {
  //   return []
  //   default value for the flats
  // }

  // to handle actions
  // }

  // export default flatsReducer;


// IMP: On peut aussi utiliser une autre synthaxe

// switch(action.type) {
//   case 'SET_FLATS'
//     return action.payload
//   default:
//     return state;
// }

