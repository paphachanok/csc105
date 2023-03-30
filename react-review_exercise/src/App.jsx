import { useState } from 'react'
import '../src/styles/App.css'
import FavoriteSites from "./components/FavoriteSites"
import Profile from "./components/Profile"
import Gallery from "./components/Gallery"
import StateAssignmentOne from './components/StateAssignmentOne'
import StateAssignmentTwo from './components/StateAssignmentTwo'

function App() {

  return (
    <div className="App">
	  <div className="favoriteSites">
		<FavoriteSites />
	  </div>
	  <div className="profile">
		<Profile />
	  </div>
	  <div className="gallery">
		<Gallery />
	  </div>

	  <div className="stateOne">
	  	<StateAssignmentOne />
	  </div>

	  <div className="stateTwo">
	  	<StateAssignmentTwo />
	  </div>
    </div>
  )
}

export default App
