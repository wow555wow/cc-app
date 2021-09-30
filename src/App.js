import './App.css';

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MenuBar from './Components/MenuBar';
import Attendance from './Components/Attendance';


function App() {
  return (
	<BrowserRouter>
	  <div className="App">
	    <main>
	  	<section className="features">
	  	  <Switch>
	  	    <Route exact path="/">
	  		<Attendance />
	  	    </Route>

	  	  </Switch>
	  	</section>
      <MenuBar />
	    </main>



	  </div>
	</BrowserRouter>

  );

};

export default App;
