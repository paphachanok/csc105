import React from 'react'
import Box from '@mui/material/Box';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu"

const navItems = ["Home", "About", "Contact"];

function Nav() {
  return (
	<>
		<AppBar sx={{backgroundColor:"#20232a"}} >
			<Toolbar sx={{display:"flex", justifyContent:"space-between"}} >
				<Typography variant="h5" sx={{color:"#ffffff"}} >
					My Website
				</Typography>
				<IconButton
					color="inherit"
					edge="start"
					sx={{ mr: 2, display:{sm: "block", md: "none"}}}
				>
					<MenuIcon />
				</IconButton>
				<Box sx={{display:{xs: "none", md: "block"}}} >
					{navItems.map((e) => (
						<Button key={e} sx={{color: "#fff" }} >
							{e}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	</>

  )
}

export default Nav
