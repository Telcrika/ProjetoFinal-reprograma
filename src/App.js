import React from 'react';
import { Switch, Route} from 'react-router-dom'
import NavBar from './Componentes/NavBar'
import Home from './Paginas/Home'
import Cardapio from './Paginas/Cardapio'
import Acontece from './Paginas/Acontece'
import Footer from './Componentes/Footer'


import './App.css';

function App () {
  return (
    <Switch>
      <>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/Cardapio' component={Cardapio} />
        <Route path='/Acontece' component={Acontece} />
        <Footer />
      </>
    </Switch>
  )
}

export default App;
