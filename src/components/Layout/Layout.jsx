import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import { Header, Box } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Box>
            <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default Layout;
