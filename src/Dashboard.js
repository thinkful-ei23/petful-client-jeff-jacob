import React from 'react';
import Pet from './components/Pet';

export default class Dashboard extends React.Component {
  onAdoptPet() {
    console.log('Button Clicked');
  }
  render() {
    console.log('catToAdopt', this.props.catToAdopt)
    console.log('dogToAdopt', this.props.dogToAdopt)
    let catToAdopt = this.props.catToAdopt;
    let dogToAdopt = this.props.dogToAdopt;
    return (
      <div className="Dashboard">
        <h1>Petful</h1>
        <Pet catToAdopt={catToAdopt} onAdoptPet={()=> this.onAdoptPet()}/>
        <Pet dogToAdopt={dogToAdopt} onAdoptPet={()=> this.onAdoptPet()}/>
      </div>
    );
  }
}
