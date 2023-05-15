// Project
import NavbarItem, { NavbarItemProps } from './NavbarItem';

interface NavbarProps {
  items: NavbarItemProps[];
}

const Navbar = ({ items }: NavbarProps) => {
  return (
    <ul className='sticky z-20 top-0 bg-indigo-600 drop-shadow p-4 flex justify-around items-center'>
      {items.map((item) => (
        <NavbarItem
          key={item.link}
          icon={item.icon}
          link={item.link}
          label={item.label}
        />
      ))}
    </ul>
  );
};

export default Navbar;
