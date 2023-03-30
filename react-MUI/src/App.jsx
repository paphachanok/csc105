import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav"
import Content from "./components/Content"
import Sidebar from './components/Sidebar'
import { Container, Grid, Box, ListItemIcon } from '@mui/material'
import RightBar from './components/RightBar'

function App() {

  return (
		<Box>
			<Nav />
			<Container>
				<Grid container spacing={3} pt={1} >
					<Grid item md={3}>
						<Sidebar />
					</Grid>
					<Grid item md={6} >
						<Content />
					</Grid>
					<Grid item md={3} >
						<RightBar />
					</Grid>
				</Grid>
			</Container>
		</Box>
  )
}

export default App
