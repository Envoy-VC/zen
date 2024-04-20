import ProfileCard from './ProfileCard';

const Sidebar = () => {
  return (
    <div className=' h-full w-full border-r'>
      <div className='flex w-full flex-col gap-4 p-2'>
        <ProfileCard />
      </div>
    </div>
  );
};

export default Sidebar;
