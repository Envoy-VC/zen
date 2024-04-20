import ProfileCard from './ProfileCard';

const Sidebar = () => {
  return (
    <div className='my-10 h-full w-full'>
      <div className='flex w-full flex-col gap-4 p-2'>
        <ProfileCard />
      </div>
    </div>
  );
};

export default Sidebar;
