import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

  class Flat extends Component {

   handleClick = () => {
    // now to handle the click we create an action, so we need a REDUX action
    this.props.selectFlat(this.props.flat)

   }

  render() {
    const style = {
      backgroundImage:`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${this.props.flat.imageUrl})`
    }
    let classes = (this.props.flat === this.props.selectedFlat) ? "card flat selected" : "card flat"
    // console.log(this.props.flat === this.props.selectedFlat)
    console.log(this.props)


    return (
      <div className={classes} style={style} onClick={this.handleClick} >
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
          <p>{this.props.flat.price} {this.props.flat.priceCurrency}</p>
        </div>
      </div>
   );
  }
};

import { selectFlat } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
  // allow to wire an action (the selectFlat) to the props of the component
  // thus we can call props.selectFlat in the function handleclick
    dispatch
  )
}



function mapReduxStateToProps(reduxState) {
 return {
  selectedFlat: reduxState.selectedFlat
 // we return the props we want to update
 };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);


// const Flat = (props) => {
//   const style = {
//     backgroundImage:`linearGradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${props.flat.imageUrl})`
//   };

//   return (
//     <div className="card flat" style={style}>
//       <div className="card-description">
//         <h2>{props.flat.name}</h2>
//         <p>{props.flat.price} {props.flat.priceCurrency}</p>
//       </div>
//     </div>
//  );
// };
