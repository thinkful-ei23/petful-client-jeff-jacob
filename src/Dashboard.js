import React from 'react';
import Pet from './components/Pet';
import connect from 'react-redux/es/connect/connect';
import { fetchCat, deleteCat } from "./actions/cat";
import { fetchDog, deleteDog } from "./actions/dog";

class Dashboard extends React.Component {
  componentDidMount() {
      this.props.dispatch(fetchDog());
      this.props.dispatch(fetchCat());
  }
  onAdoptPet(animalType) {
    if (animalType === 'cat') {
      this.props.dispatch(deleteCat())
      .then(() => {
        this.props.dispatch(fetchCat());
      }); 
    } else if (animalType === 'dog') {
      this.props.dispatch(deleteDog())
      .then(() => {
        this.props.dispatch(fetchDog());
      });
    }
  }
  render() {
    let catToAdopt = this.props.catData;
    let dogToAdopt = this.props.dogData;
    return (
      <div className="Dashboard">
        <h1>Petful</h1>
        {(catToAdopt) && <Pet catToAdopt={catToAdopt} onAdoptPet={animalType => this.onAdoptPet(animalType)}/>}
        {(dogToAdopt) && <Pet dogToAdopt={dogToAdopt} onAdoptPet={animalType => this.onAdoptPet(animalType)}/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catData: state.catReducer.data,
    dogData: state.dogReducer.data
  };
}

export default connect(mapStateToProps)(Dashboard);
