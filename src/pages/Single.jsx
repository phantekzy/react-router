/* Import section */
import {
	useParams,
}
	from 'react-router-dom'

/* Single function logic */
export function Single() {
	const { id } = useParams()
	return (
		<h1>You are reading the Blog number {id}</h1>
	)
}
