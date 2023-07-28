import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
//import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
//import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
//import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css';
//import 'primereact/resources/themes/md-light-indigo/theme.css';
//import 'primereact/resources/themes/md-light-deeppurple/theme.css';
//import 'primereact/resources/themes/md-dark-indigo/theme.css';
//import 'primereact/resources/themes/md-dark-deeppurple/theme.css';
//import 'primereact/resources/themes/mdc-light-indigo/theme.css';
//import 'primereact/resources/themes/mdc-light-deeppurple/theme.css';
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
//import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
//import 'primereact/resources/themes/tailwind-light/theme.css';
//import 'primereact/resources/themes/fluent-light/theme.css';
//import 'primereact/resources/themes/lara-light-blue/theme.css';
//import 'primereact/resources/themes/lara-light-indigo/theme.css';
//import 'primereact/resources/themes/lara-light-purple/theme.css';
//import 'primereact/resources/themes/lara-light-teal/theme.css';
//import 'primereact/resources/themes/lara-dark-blue/theme.css';
//import 'primereact/resources/themes/lara-dark-indigo/theme.css';
//import 'primereact/resources/themes/lara-dark-purple/theme.css';
//import 'primereact/resources/themes/lara-dark-teal/theme.css';
//import 'primereact/resources/themes/soho-light/theme.css';
//import 'primereact/resources/themes/soho-dark/theme.css';
//import 'primereact/resources/themes/viva-light/theme.css';
//import 'primereact/resources/themes/viva-dark/theme.css';
//import 'primereact/resources/themes/mira/theme.css';
//import 'primereact/resources/themes/nano/theme.css';
//import 'primereact/resources/themes/saga-blue/theme.css';
//import 'primereact/resources/themes/saga-green/theme.css';
//import 'primereact/resources/themes/saga-orange/theme.css';
//import 'primereact/resources/themes/saga-purple/theme.css';
//import 'primereact/resources/themes/vela-blue/theme.css';
//import 'primereact/resources/themes/vela-green/theme.css';
//import 'primereact/resources/themes/vela-orange/theme.css';
//import 'primereact/resources/themes/vela-purple/theme.css';
//import 'primereact/resources/themes/arya-blue/theme.css';
//import 'primereact/resources/themes/arya-green/theme.css';
//import 'primereact/resources/themes/arya-orange/theme.css';
//import 'primereact/resources/themes/arya-purple/theme.css';

import { RouterProvider } from 'react-router-dom';
import { appRouter } from './routes';

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
