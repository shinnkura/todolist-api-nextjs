import React, { Suspense } from 'react';
import TodoList from './(users)/todos/TodoList';

function Home() {
  return (
  <div className='flex flex-col space-y-10'>

    <Suspense fallback={<p className='text-red-500'>Loading the Todos...</p>}>
      <div className='flex space-x-2'>
        {/* @ts-ignore */}
        <TodoList />
      </div>
    </Suspense>

    <Suspense fallback={<p className='text-blue-500'>Loading the shopping Trolley...</p>}>
      <div className='flex space-x-2'>
        {/* @ts-ignore */}
        <TodoList />
      </div>
    </Suspense>

  </div>
  );
}

export default Home;