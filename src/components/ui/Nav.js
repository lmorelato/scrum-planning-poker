import { Menubar } from 'primereact/menubar';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  // const navigate = useNavigate();
  // command: () => { navigateTo('/'); },
  // const navigateTo = (url) => { navigate(url); };

  const createLink = (item, options) => {
    return (
      <NavLink to={item.url} className={options.className}>
        {item.icon && (
          <span className={options.iconClassName}></span>
        )}
        <span className={options.labelClassName}>{item.label}</span>
      </NavLink>
    );
  };

  const navlist = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-file',
      url: '/',
      template: (item, options) => {
        return createLink(item, options);
      },
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-file',
      url: '/about',
      template: (item, options) => {
        return createLink(item, options);
      },
    },
    {
      label: 'Room',
      icon: 'pi pi-fw pi-phone',
      url: '/room',
      template: (item, options) => {
        return createLink(item, options);
      },
    },
  ];

  return (
    <>
      <header>
        <nav>
          <Menubar model={navlist} />
        </nav>
      </header>
    </>
  );
};

export default Navigation;
