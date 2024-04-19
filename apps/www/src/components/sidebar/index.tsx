import { Logo } from '~/components/icons';

const Sidebar = () => {
  return (
    <div className=' h-full w-full border-r'>
      <div className='fixed left-0 top-0 flex h-full w-full max-w-[25%] overflow-scroll'>
        <div className='overflow-scroll p-2'>
          <div className='flex flex-row items-center gap-2'>
            <Logo size={36} />
            <div className='mb-1 font-yoruka text-4xl text-zinc-800'>zen</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
