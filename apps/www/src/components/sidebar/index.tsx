import Navigation from './Navigation';
import ProfileCard from './ProfileCard';

const Sidebar = () => {
  return (
    <div className=' h-full w-full border-r'>
      <div className='fixed left-0 top-0 flex h-full w-full max-w-[25%] overflow-scroll'>
        <div className='flex w-full flex-col gap-4 overflow-scroll p-2'>
          <ProfileCard />
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
