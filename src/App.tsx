import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

const memoryHistory = createMemoryHistory({
  initialEntries: ['/'], // Pass your initial url
});

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  history: memoryHistory,
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
