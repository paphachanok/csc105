import { Card, Grid, Box, Typography, CardMedia, CardContent } from '@mui/material'
import React from 'react'

function Content() {
  return (
	<>
		<Grid
			container
			direction="column"
			justifyContent="flex-start"
			alignItems="center"
			pt={10}
		>
			<Grid item xs={6} >
				<Box>
					<Typography variant="h4" sx={{mb:2, color:"#000"}} >
						Welcome to My Website
					</Typography>
					<Typography variant="body1" sx={{mb:2,color:"#000"}} >
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolorem maiores quos iste molestias voluptatem error voluptas quod consequatur tempore voluptates excepturi dicta reprehenderit animi magnam, itaque reiciendis inventore praesentium asperiores? Laudantium ad alias aliquam nam? Tenetur voluptas minima reiciendis culpa placeat modi dolor omnis explicabo ratione? Tempore, eveniet minima.
					</Typography>
					<Typography variant="body1" sx={{mb:2,color:"#000"}} >
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatum dolor ex molestias quibusdam placeat impedit obcaecati porro voluptates excepturi? Numquam corporis saepe eius, ut voluptatum similique sunt magnam doloribus qui, aut repellat voluptas error expedita ipsum, alias nihil ab aspernatur autem. Blanditiis repellat laborum tenetur deserunt, facilis voluptate cumque?
					</Typography>
				</Box>
			</Grid>


			<Grid item xs={6}>
				<Grid container spacing={2}>

					{/* no.1 */}
					<Grid item sm={12} md={6} >
						<Card>
							<CardMedia
								component="img"
								height="200"
								image="https://i.pinimg.com/564x/fa/3b/9c/fa3b9c4a5b49b4a88a9fe53e8248a31a.jpg"
								alt="image cannot be loaded"
							/>
							<CardContent>
								<Typography gutterBottom variant="h4" component="div" >
									Card Title
								</Typography>
								<Typography gutterBottom variant="body2" color="text.secondary">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur molestias distinctio incidunt, eius suscipit vero commodi repellendus laudantium aperiam.
								</Typography>
							</CardContent>
						</Card>
					</Grid>

					{/* no.2 */}
					<Grid item sm={6} md={6} >
						<Card>
							<CardMedia
								component="img"
								height="200"
								image="https://i.pinimg.com/564x/fa/3b/9c/fa3b9c4a5b49b4a88a9fe53e8248a31a.jpg"
								alt="image cannot be loaded"
							/>
							<CardContent>
								<Typography gutterBottom variant="h4" component="div" >
									Card Title
								</Typography>
								<Typography gutterBottom variant="body2" color="text.secondary">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur molestias distinctio incidunt, eius suscipit vero commodi repellendus laudantium aperiam.
								</Typography>
							</CardContent>
						</Card>
					</Grid>

					{/* no.3 */}
					<Grid item sm={6} md={6} >
						<Card>
							<CardMedia
								component="img"
								height="200"
								image="https://i.pinimg.com/564x/fa/3b/9c/fa3b9c4a5b49b4a88a9fe53e8248a31a.jpg"
								alt="image cannot be loaded"
							/>
							<CardContent>
								<Typography gutterBottom variant="h4" component="div" >
									Card Title
								</Typography>
								<Typography gutterBottom variant="body2" color="text.secondary">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur molestias distinctio incidunt, eius suscipit vero commodi repellendus laudantium aperiam.
								</Typography>
							</CardContent>
						</Card>
					</Grid>

				</Grid>
			</Grid>
		</Grid>
	</>
  )
}

export default Content
