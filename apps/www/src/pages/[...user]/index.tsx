import React from 'react';
import { Await } from 'react-router-dom';
import { useLoaderData, useNavigation } from 'react-router-dom';


const UserProfile = () => {
  const data = useLoaderData() as {
    data: Promise<unknown>;
  };
  const { state } = useNavigation();

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Await resolve={data.data} errorElement={<p>Error!</p>}>
        {(data) => <pre>{JSON.stringify(data, null, 2)}</pre>}
      </Await>
    </React.Suspense>
  );

  if (state === 'loading') {
    return <div>Loading...</div>;
  } else {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }
};

export default UserProfile;