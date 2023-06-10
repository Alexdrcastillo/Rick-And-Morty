import React from 'react';

function CharacterDetails(props) {
  const { character } = props;

  return (
    <div style={{width: "300px", color: "red"}}>
      <h1>{character.name}</h1>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <h2>{character.origin.name}</h2>
      <img style={{width: "100%"}} src={character.image} alt={character.name} />
    </div>
  );
}

export default CharacterDetails;
