import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from 'components/ui/';

import { HomePage } from 'pages/Home';
import { AboutPage } from 'pages/About';
import { RoomPage } from 'pages/Room';
import { ErrorPage } from 'pages/Error';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/room', element: <RoomPage /> },
    ],
  },
]);
