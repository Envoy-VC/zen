import { PostCard } from '~/components/cards';
import { Button } from '~/components/ui/button';

const Home = () => {
  return (
    <div className='bg-background-secondary relative mx-auto my-12 flex max-w-screen-md flex-col rounded-xl border'>
      <div className='flex flex-row items-center justify-between px-6 py-2'>
        <div className='font-semibold text-lg'>Feeds</div>
        <div className='flex flex-row items-center gap-2'>
          <Button variant='ghost' className='px-2'>
            Recent
          </Button>
          <Button variant='ghost' className='px-2'>
            Popular
          </Button>
        </div>
      </div>
      <div className='flex flex-col'>
        {Array.from({ length: 10 }).map((_, index) => {
          return <PostCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
