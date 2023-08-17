import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from 'components/ui/';
import { HomePage } from 'pages/Home';
import { AboutPage } from 'pages/About';
import { RoomPage } from 'pages/Room';
import { ErrorPage } from 'pages/Error';
import { pages } from 'data';

export const appRouter = createBrowserRouter([
  {
    path: pages.root.path,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: pages.home.path, element: <HomePage /> },
      { path: pages.about.path, element: <AboutPage /> },
      { path: pages.room.path, element: <RoomPage /> },
    ],
  },
]);
