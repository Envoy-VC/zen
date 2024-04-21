import { Sidebar } from '~/components';

import { PostCard } from '~/components/cards';
import { Button } from '~/components/ui/button';

const Home = () => {
  return (
    <div className='mx-auto mb-[10dvh] flex w-full max-w-screen-xl flex-row sm:mb-0'>
      <div className='w-full basis-[100%] px-2 lg:basis-2/3'>
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
      </div>
      <div className='hidden w-full lg:flex lg:basis-1/3'>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
