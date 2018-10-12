import React from 'react';

export default class Pet extends React.Component {
  adoptAnimal() {
    let animalType;
    if (this.props.catToAdopt) {
      animalType = 'cat';
    } else if (this.props.dogToAdopt) {
      animalType = 'dog'
    }
    this.props.onAdoptPet(animalType);
  }
  
  render() {
    let animalToAdopt;
    if (this.props.catToAdopt) {
      animalToAdopt = this.props.catToAdopt.data;
    } else if (this.props.dogToAdopt) {
      animalToAdopt = this.props.dogToAdopt.data;
    }
    return (
      <section>
          <header>
            <h2>{animalToAdopt.name}</h2>
            <img src={animalToAdopt.imageURL} alt={animalToAdopt.imageDescription}/>
          </header>
          <main>
            <dl>
              <dt>Breed</dt>
              <dd>{animalToAdopt.breed}</dd>
              <dt>Age</dt>
              <dd>{animalToAdopt.age}</dd>
              <dt>Sex</dt>
              <dd>{animalToAdopt.sex}</dd>
              <dt>My Story</dt>
              <dd>{animalToAdopt.story}</dd>
            </dl>
            <button onClick={() => this.adoptAnimal()}>Adopt Me</button>
          </main>
        </section>
    );
  }
}
