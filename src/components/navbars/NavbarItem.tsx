import { Link, useLocation } from 'react-router-dom';

export interface NavbarItemProps {
  link: string;
  label: string;
  icon: JSX.Element;
}

const NavbarItem = ({ link, label, icon }: NavbarItemProps) => {
  const { pathname } = useLocation();
  const isActiveRoute = link === pathname;

  return (
    <Link
      to={link}
      className={`flex gap-2 p-2 rounded-md transition-all duration-300
        hover:bg-indigo-400 text-white items-end
        ${isActiveRoute && 'bg-indigo-500'}
      `}
    >
      <i>{icon}</i>
      <h4>{label}</h4>
    </Link>
  );
};

export default NavbarItem;
