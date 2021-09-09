import React from 'react';
import './FilmeCard.scss';

const FilmeCard = (props) => {
  const filme = props.filme;

  return (
    <div className="card">
      <div className="card-img">
        <img src={filme.capa} alt="" />
      </div>
      <p className="card-text">{filme.nome}</p>
      <span className="card-info">{filme.genero}</span>
    </div>
  )
}

export default FilmeCard