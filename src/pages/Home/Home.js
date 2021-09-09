import React from 'react';
import FilmeList from '../../components/structure/FilmeList/FilmeList';
import './Home.scss';

const Home = () => {
  return (
    <section className="content">
      <h1 className="content-title">Listagem de Filmes</h1>
      <div className="content-list">
        <h1>Projeto de Filmes</h1>
        <filmeList />
      </div>
    </section>
  )
}

export default Home