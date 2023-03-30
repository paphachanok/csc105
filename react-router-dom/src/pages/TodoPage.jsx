import { Box } from '@mui/material';
import React from 'react'
import BottomNav from '../components/BottomNav';
import Home from "../components/Home";
import Todo from "../components/Todo";

function TodoPage() {
  return (
	<Box
		sx={{
			display: {md: "flex"},
			flexDirection: {md: "row"},
			justifyContent: "center",
			alignItems: "center",
			height: "100vh",
		}}
	>
		<Box sx={{ display: { xs: "none", md: "block"} }}
		>
			<Home />
		</Box>
		<Box
			sx={{
				backgroundColor: "#a08bff",
				height: {xs: "90%", md: "604px"},
				width: {xs: "100%", md: "580px"},
				margin: {md: "20px"},
				borderRadius:"20px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<Todo />
		</Box>
		<Box sx={{ display: { md: "none"} }}>
			<BottomNav />
		</Box>
	</Box>
  )
}

export default TodoPage
