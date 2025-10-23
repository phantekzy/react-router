/* Import section */
import {
	useLoaderData,
	useAsyncValue,
	Await,
	NavLink,
}
	from 'react-router-dom'
import { Suspense }
	from 'react'

/* Blog function logic */
export function Blog() {
	const { posts } = useLoaderData()
	return (
		<>
			<h1>Vlog section</h1>
			<Suspense fallback={<h1>LOADING...</h1>}>
				<Await resolve={posts}>
					<PostLists />
				</Await>
			</Suspense>
		</>
	)
}


function PostLists() {
	const posts = useAsyncValue()
	return (
		<ul>
			{posts.map(post => (
				<li key={post.id}>
					<NavLink to={`${post.id}`}>{post.title}</NavLink>
				</li>
			))}
		</ul>
	)
}
