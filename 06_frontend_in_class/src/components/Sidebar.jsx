import React from 'react'
import { List, Box, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { ListItem } from '@mui/material';

const icon_list = [
	{icon: <HomeIcon />, name: "Homepage"},
	{icon: <ArticleIcon />, name: "Pages"},
	{icon: <GroupIcon />, name: "Group"},
	{icon: <StorefrontIcon />, name: "Marketplace"},
	{icon: <PersonIcon />, name: "Friends"},
	{icon: <SettingsIcon />, name: "Settings"},
	{icon: <AccountBoxIcon />, name: "Profile"},
]

function Sidebar() {
  return (
	<>
		<Box pt={10} sx={{display:{xs:"none", md:"block"}}} mr={1} >
			<Box display={"flex"} justifyContent={"flex-end"}>
				<List>
					{icon_list.map((e) => (
						<ListItem key={e.name} >
							<ListItemIcon>{e.icon}</ListItemIcon>
							<ListItemText primary={e.name}/>
						</ListItem>
					))}
				</List>
			</Box>
		</Box>
	</>
  );
};

export default Sidebar
