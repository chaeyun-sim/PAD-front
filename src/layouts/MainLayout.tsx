import { Outlet, useLocation } from 'react-router-dom';
import SideMenu from '@/components/organisms/sides/SideMenu';
import MainSideBar from '@/components/organisms/sides/MainSideBar';

const MainLayout = () => {
  const preventInfo = ['/login'];
  const location = useLocation();

  return (
    <div className='min-h-screen flex px-[10px]'>
      <div className='sticky top-0 h-screen w-[68px] z-10'>
        <SideMenu />
      </div>

      <div className='flex-1 overflow-y-auto'>
        <div className='max-w-[800px] w-full mx-auto py-6'>
          <Outlet />
        </div>
      </div>

      {!preventInfo.includes(location.pathname) && (
        <div className='sticky top-0 h-screen w-[330px] p-2 hidden lg:block !z-1'>
          <MainSideBar />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
