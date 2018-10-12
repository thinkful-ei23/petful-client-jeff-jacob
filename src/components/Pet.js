import React from 'react';

export default function Pet(props) {
  let animalToAdopt;
  if (props.catToAdopt) {
    animalToAdopt = props.catToAdopt;
  } else if (props.dogToAdopt) {
    animalToAdopt = props.dogToAdopt;
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
          <button onClick={props.onAdoptPet}>Adopt Me</button>
        </main>
      </section>
  );
}