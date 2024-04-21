import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

const UserDetails = () => {
  return (
    <div className='flex -translate-y-[3.5rem] flex-col gap-4 px-10 md:-translate-y-[6rem]'>
      <div className='w-fit rounded-2xl bg-background-secondary p-2 sm:p-3'>
        <Avatar className='h-full max-h-[7rem] w-full max-w-[7rem] rounded-xl sm:max-h-[12rem] sm:max-w-[12rem]'>
          <AvatarImage
            src='https://avatars.githubusercontent.com/u/65389981?v=4'
            alt='Profile Image'
            loading='lazy'
          />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='font-bold text-xl sm:text-2xl'>Envoy_</div>
        <div className='text-foreground-secondary font-medium text-sm sm:text-base'>
          @envoy1084
        </div>
      </div>
      <div className='flex flex-row items-center gap-6 text-sm sm:text-base'>
        <div className='flex flex-col'>
          <div className='font-regular text-2xl'>1.2k</div>
          <div className='text-foreground-secondary'>Followers</div>
        </div>
        <div className='flex flex-col'>
          <div className='text-2xl'>345</div>
          <div className='text-foreground-secondary'>Following</div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
