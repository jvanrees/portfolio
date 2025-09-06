import { MantineProvider, createTheme } from '@mantine/core';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import './styles/App.css';

import { routeTree } from './routeTree.gen';

// Ensures mantine radius is consistent across all components
const theme = createTheme({
  defaultRadius: 'sm',
});

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultViewTransition: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
const App = () => {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App