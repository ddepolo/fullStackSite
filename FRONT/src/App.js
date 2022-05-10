import './styles/bootstrap.css';
import './styles/custom.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Pedidos from './pages/Pedidos';



function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/productos" exact component={Productos} />
        <Route path="/contacto" exact component={Contacto} />
        <Route path="/pedidos" exact component={Pedidos} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
