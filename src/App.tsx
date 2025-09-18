import { createTheme, MantineProvider } from "@mantine/core";
import {
	createBrowserHistory,
	createRouter,
	RouterProvider,
} from "@tanstack/react-router";
import "./styles/App.css";

import { routeTree } from "./routeTree.gen";

// Ensures mantine radius is consistent across all components
const theme = createTheme({
	defaultRadius: "sm",
});

const router = createRouter({
	routeTree,
	history: createBrowserHistory(),
	defaultPreload: "intent",
	scrollRestoration: true,
	defaultViewTransition: true,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
const App = () => {
	return (
		<MantineProvider theme={theme}>
			<RouterProvider router={router} />
		</MantineProvider>
	);
};

export default App;
