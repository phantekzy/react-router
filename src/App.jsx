/* Import section */
import {
	createBrowserRouter,
	RouterProvider,
	useNavigation,
	useRouteError,
	NavLink,
	Outlet,
}
	from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Single } from './pages/Single'

/* Layout function logic */
function Layout() {
	const navigation = useNavigation()
	return <>
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<NavLink className="navbar-brand" to='/'>Home</NavLink>{' '}
					<NavLink className="nav-link" to='/blog'>Blog</NavLink>{' '}
					<NavLink className="nav-link" to='/contact'>Contact</NavLink>

				</div>
			</nav>
			{/* Content will show here */}
			<div className='container my-4'>
				{navigation.state === 'loading' ? (
					<p style={{ color: "blue", fontWeight: "bold" }}>Loading ...</p>
				) : (
					<Outlet />
				)}
			</div>
		</header>
	</>
}


/* Router setup section */
const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <PageError />,
		children: [{
			path: "/",
			element: (
				<div className="text-center my-4">
					<h1 className="lead">Welcome to Our Blog!</h1>
					<p className="bg-light p-3">Explore the latest insights, tips, and updates from our team. Whether you're looking for inspiration, industry news, or helpful guides, you've come to the right place. Start browsing and stay informed!</p>
				</div>
			)
		},


		{
			path: "/blog",
			element: (
				<div className="container-fluid">
					<div className="row">
						<aside className="col-3 bg-light border-end p-4">
							<h1 className="h4 fw-bold mb-4">Side bar</h1>
							{/* Add your sidebar content here */}
						</aside>
						<main className="col-9 p-4 bg-light">
							<h1 className="h2 fw-bold mb-4">Blog content</h1>
							<Outlet />
						</main>
					</div>
				</div>
			),
			children: [{
				path: "",
				element: <Blog />,
				loader: () => {
					return {
						posts: fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
							.then(r => r.json())
					}
				}

			},

			{
				path: ":id",
				element: <Single />
			}
			]
		},


		{
			path: "/contact",
			element: (
				<div className="container mt-4">
					<div className="row justify-content-center">
						<div className="col-md-6">
							<div className="input-group mb-3">
								<input type="text" placeholder="Add your Email" className="form-control" />
							</div>
							<div className="input-group mb-3">
								<input type="text" placeholder="Add your phone Number" className="form-control" />
							</div>
							<button className="btn btn-primary w-100">Send</button>

						</div>
					</div>

				</div>

			)
		}
		]
	}
])
/* Error management */
function PageError() {
	const error = useRouteError()
	return (
		<>
			<h1 className='alert alert-danger text-center my-4'> ERROR 404 DATA NOT FOUND</h1>
			<p className="text-center">{error.message || "Unknown error"}</p>
		</>
	)

}

/* App function logic */
function App() {
	return <RouterProvider router={router} />
}

/* Export section */
export default App
