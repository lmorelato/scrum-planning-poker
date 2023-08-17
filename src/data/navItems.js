import { Link } from 'react-router-dom';
import { pages } from 'data';

const createLink = (item, options) => {
  return (
    <Link to={item.url} className={options.className}>
      {item.icon && <span className={options.iconClassName}></span>}
      <span className={options.labelClassName}>{item.label}</span>
    </Link>
  );
};

const iconPrefix = 'pi pi-fw pi-';

export const navItems = [
  {
    label: pages.home.title,
    url: pages.home.path,
    icon: `${iconPrefix}file`,
    template: (item, options) => createLink(item, options),
  },
  {
    label: pages.about.title,
    url: pages.about.path,
    icon: `${iconPrefix}file`,
    template: (item, options) => createLink(item, options),
  },
  {
    label: pages.room.title,
    url: pages.room.path,
    icon: `${iconPrefix}file`,
    template: (item, options) => createLink(item, options),
  },
];
