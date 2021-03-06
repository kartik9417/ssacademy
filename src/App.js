import './App.css';
import Upnav from './components/Upnav';
import Nav from './components/Nav';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Courses from './components/Courses';
import ErrorPage from './components/ErrorPage';
import Progress from './components/Progress';
function App() {
  return (
    <>
    <Upnav />
    <Nav />
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/courses/:class1?' component={Courses}></Route>
      <Route exact path='/faculty' component={Progress}></Route>
      <Route exact path='/examination' component={Progress}></Route>
      <Route component={ErrorPage}></Route>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
