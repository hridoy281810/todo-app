import React from 'react';
import TodoCard from './TodoCard';
import { Button } from '../ui/button';
import AddTodoModal from './AddTodoModal';
import TodoDropDown from './TodoDropDown';
import { useAppSelector } from '@/Redux/hook';

const TodoContainer = () => {
  const todoData = useAppSelector((state) => state.todos.todos)
  console.log(todoData);
  
  return (
    <div className=''>
   <div className='flex justify-between items-center mb-5'>
   <AddTodoModal></AddTodoModal>
    <TodoDropDown />
   </div>
   <div className='bg-primary-gradient w-full h-full rounded-xl p-[5px] space-y-3'>
 <div className='bg-white rounded-lg p-5 w-full h-full space-y-3'>
  {
    todoData.map((item)=> <TodoCard key={item.id} title={item.title} description={item.description}/> )
  }

 
    {/* <div className='bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-lg'>
        <p>There is no task pending</p> {' '}
    </div> */}

 </div>
   </div>
    </div>
  );
};

export default TodoContainer;