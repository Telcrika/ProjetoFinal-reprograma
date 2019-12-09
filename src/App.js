import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Navbar from './Componentes/Navbar'
import Home from './Paginas/Home'
import Cardapio from './Paginas/Cardapio'
import Acontece from './Paginas/Acontece'


import './App.css';

function App () {
  return (
    <Switch>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/Cardapio' component={Cardapio} />
        <Route path='/Acontece' component={Acontece} />
      </div>
    </Switch>
  )
}

export default App;
