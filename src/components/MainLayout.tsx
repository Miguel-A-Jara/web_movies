import { Home, Favorite } from '@mui/icons-material';

// Project
import Navbar from '~/components/navbars/Navbar';
import { NavbarItemProps } from './navbars/NavbarItem';
import { MAIN_APP_ROUTES } from '~/config/router/mainRoutes';

const navbarItems: NavbarItemProps[] = [
  {
    label: 'Películas',
    link: MAIN_APP_ROUTES.HOME_MOVIES,
    icon: <Home />,
  },
  {
    label: 'Favoritos',
    link: MAIN_APP_ROUTES.FAVORITE_MOVIES,
    icon: <Favorite />,
  },
];

interface MainLayoutProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <main className='relative bg-indigo-800 min-h-screen'>
      <Navbar items={navbarItems} />
      <h1 className='text-5xl text-center font-light py-8 text-white'>
        {title}
      </h1>
      {children}
    </main>
  );
};

export default MainLayout;
