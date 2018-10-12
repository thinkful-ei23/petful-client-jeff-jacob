import React from 'react';
import Pet from './components/Pet';
import connect from 'react-redux/es/connect/connect';
import { fetchCat } from "./actions/cat";

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchCat());
    }

    onAdoptPet() {
    console.log('Button Clicked');
  }
  render() {
    console.log(this.props);
      // console.log('catToAdopt', this.props.catToAdopt)
    // console.log('dogToAdopt', this.props.dogToAdopt)
    let catToAdopt = this.props.catData;


    // let dogToAdopt = this.props.dogData;
    return (
      <div className="Dashboard">
        <h1>Petful</h1>
          {(catToAdopt) && <Pet catToAdopt={catToAdopt} onAdoptPet={()=> this.onAdoptPet()}/>}
        {/*<Pet dogToAdopt={dogToAdopt} onAdoptPet={()=> this.onAdoptPet()}/>*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        catData: state.catReducer.data
    };
}

export default connect(mapStateToProps)(Dashboard);
