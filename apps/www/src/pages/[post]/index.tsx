import React from 'react';
import { Await } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const PostPage = () => {
  const data = useLoaderData() as {
    data: Promise<unknown>;
  };

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Await resolve={data.data} errorElement={<p>Error!</p>}>
        {(data) => <pre>{JSON.stringify(data, null, 2)}</pre>}
      </Await>
    </React.Suspense>
  );
};

export default PostPage;
