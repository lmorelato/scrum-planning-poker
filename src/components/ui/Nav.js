import { Menubar } from 'primereact/menubar';
import { navItems } from 'data';

const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <Menubar model={navItems} />
        </nav>
      </header>
    </>
  );
};

export default Navigation;
