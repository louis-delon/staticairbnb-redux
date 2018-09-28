import React, { Component } from 'react';
import Flat from './flat';
// We need to import that from redux
// thanks to this 1st method we can implement the function mapDispactchToProps
import { bindActionCreators } from 'redux';
// allow to connect the function mapDispatchToProps to the component
import { connect } from 'react-redux';
// va recupérer index.js dans le dossier actions
import { setFlats } from '../actions';

class FlatList extends Component {
  // TEMPORARY CODE TO INTEGRATE HTML
   // static defaultProps = {
   //   flats: [{
   //     "name": "Charm at the Steps of Montmartre",
   //     "imageUrl": `https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg`,
   //     "price": 164,
   //     "priceCurrency": "EUR"
   //   }]
   // }
   componentWillMount() {
    // TODO: dispatch an action to load flats!
    // We need to set the setFlats method
    this.props.setFlats();
    // When the FLatlist mount, this will trigger the action from redux, the action will fetch the flats
    // from the api, then the reducer will receive this action and update the redux store
    // Now the redux store is updated and contains the flats
    }

  render() {
    console.log(this.props.flats)
    return (
      <div className="flat-list col-sm-7">
        { this.props.flats.map((flat) => { return <Flat flat={flat} key={flat.name} /> })}
      </div>
    )
  }
}

// this function will bind actions to the props of the component, this way
// in the component we will be able to
function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setFlats: setFlats },
 // la méthode SetFlats est maintenant liée au props de la Flatlist
 // Dispatch est un argumeent que la méthode recoit, c'est utilisé pour
 // déclencher les actions (fourni par redux)
 dispatch
 );
}

function mapReduxStateToProps(reduxState) {
 return {
 flats: reduxState.flats
 // we return the props we want to update
 };
}

// permet de connecter la méthode mapDispatchToProps au composant
export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);


