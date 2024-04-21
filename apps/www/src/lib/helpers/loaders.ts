import { Params } from 'react-router-dom';
import { defer } from 'react-router-dom';

import { queryClient } from '~/providers/QueryProvider';

interface Props {
  params: Params;
}

export const userProfileLoader = async ({ params }: Props) => {
  const userId = params['userId'];
  const res = queryClient.fetchQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const res = await fetch(
        'https://official-joke-api.appspot.com/random_joke'
      );
      const data = (await res.json()) as {
        type: string;
        setup: string;
        punchline: string;
        id: number;
      };
      return data;
    },
  });
  return defer({
    data: res,
  });
};

export const postPageLoader = async ({ params }: Props) => {
  const userId = params['postId'];
  const res = queryClient.fetchQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const res = await fetch(
        'https://official-joke-api.appspot.com/random_joke'
      );
      const data = (await res.json()) as {
        type: string;
        setup: string;
        punchline: string;
        id: number;
      };
      return data;
    },
  });
  return defer({
    data: res,
  });
};
