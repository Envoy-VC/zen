import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

const ProfileCard = () => {
  return (
    <div className='flex w-full flex-col items-center rounded-xl border bg-white py-3'>
      <Avatar className='h-full max-h-20 w-full max-w-20 rounded-full'>
        <AvatarImage
          src='https://avatars.githubusercontent.com/u/65389981?v=4'
          alt='Profile Image'
          loading='lazy'
        />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>

      <div className='pt-1 text-lg font-semibold'>Vedant Chainani</div>
      <p>Indie Hacker and Technical Writer</p>
      <div className='flex w-full flex-row items-center gap-1 px-4 py-3'>
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='text-xl font-semibold'>368</div>
          <div>Posts</div>
        </div>
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='text-xl font-semibold'>11.2k</div>
          <div>Followers</div>
        </div>
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='text-xl font-semibold'>2.3k</div>
          <div>Following</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
