import { Rss } from 'lucide-react';

import { PostCard } from '~/components/cards';
import { Button } from '~/components/ui/button';

const UserFeed = () => {
  return (
    <div className='flex flex-col gap-2 sm:py-12'>
      <Button
        variant='outline'
        className='flex h-8 w-fit flex-row items-center gap-2 font-medium text-sm mx-3 sm:mx-0'
      >
        <Rss className='mb-1' size={16} strokeWidth={2.5} />
        Feed
      </Button>
      <div className='sm:order-l border-b border-t bg-background-secondary sm:rounded-xl sm:border-r'>
        <div className='flex flex-col'>
          {Array.from({ length: 10 }).map((_, index) => {
            return <PostCard key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserFeed;
