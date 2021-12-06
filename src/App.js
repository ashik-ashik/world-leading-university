import './App.css';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import Events from './components/Events/Events';
import LoadData from './DataLoad/LoadData';
import { createContext } from 'react';
import SingleCourse from './components/SingleCourse/SingleCourse';

export const DataContext = createContext("data");

function App() {
  // load courses data
  const [courses] = LoadData("courses");
  return (
    <>
    <DataContext.Provider value={courses}>

      <Router>
        <Header/>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <Courses/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/events">
            <Events/>
          </Route>
          <Route exact path="/course/:title/:id">
            <SingleCourse />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>

        <Footer/>
      </Router>

    </DataContext.Provider>
      
      
    </>
  );
}

export default App;
