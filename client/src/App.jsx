import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ path: "/", element: <HomePage /> },
				{ path: "/list", element: <ListPage /> },
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;