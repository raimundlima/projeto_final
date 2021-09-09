import './App.scss';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FilmeAdd from './pages/FilmeAdd/FilmeAdd';

function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/add" component={FilmeAdd}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;