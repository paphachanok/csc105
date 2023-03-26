import React from 'react'
import Card from './Card'

function List({users}) {
  return (
	<div>
		{
			users.map((e, index) => {
				// return <Card key={index} name={e.name} job={e.job} hobby={e.hobby} />
				return <Card key={index} user={e} />
			})
		}
	</div>
  )
}

export default List
