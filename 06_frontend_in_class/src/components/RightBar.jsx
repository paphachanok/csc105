import React from 'react'
import { Box, ImageList, ImageListItem, Typography} from '@mui/material'

const itemData = [
	{
	  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
	  title: 'Breakfast',
	},
	{
	  img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
	  title: 'Burger',
	},
	{
	  img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
	  title: 'Camera',
	},
	{
	  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
	  title: 'Coffee',
	}
  ];

function RightBar() {
  return (
	<Box sx={{display: {xs: "none", md: "block"}}} pr={4} pt={10} mr={1}>
		<Box display={"flex"} flexDirection={"column"} mt={2} mb={5} >
			<Typography variant='h6' >
				Latest photos
			</Typography>
			<ImageList sx={{ width: 250 }} cols={2}>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<img
						src={`${item.img}`}
						srcSet={`${item.img}`}
						alt={item.title}
						loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	</Box>
  );
};

export default RightBar
