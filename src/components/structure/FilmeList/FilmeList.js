import React, { useEffect, useState } from 'react';
import FilmeCard from '../FilmeCard/FilmeCard';
import './FilmeList.scss';

const FilmeList = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(()=> {
    getFilme();
  }, [])
  
  const url = 'http://localhost:3002/filmes';

  const getFilme = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    console.log(data);
    setFilmes(data);
  }

  return (
    <div className="list">
      {filmes.map((filme, index) => (
        <FilmeCard filme={filme} key={filme._id}/>
      ))}
    </div>
  )
}

export default FilmeList