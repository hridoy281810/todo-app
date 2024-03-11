import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
import { Button } from "../ui/button";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "@/Redux/hook";
import { addTodo } from "@/Redux/features/todoSlice";

const AddTodoModal = () => {
    const [task,setTask] = useState('')
    const [description,setDescription] = useState('')
    const dispatch = useAppDispatch()

    
    const onSubmit = (e: FormEvent) =>{
        e.preventDefault()
        const ransomString = Math.random().toString(36).substring(2,9)
        const taskDetails= {
          id: ransomString,
            title: task,
            description:description
        }
       dispatch(addTodo(taskDetails));
        
    }
  return (
 
   <Dialog>
      <DialogTrigger asChild>
      <Button className='bg-primary-gradient text-xl  font-semibold'>Add Todo</Button>
      </DialogTrigger>
      <DialogContent onSubmit={onSubmit} className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
           Add your tasks that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
             Task Name
            </Label>
            <Input onBlur={(e)=> setTask(e.target.value)} id="task" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
           Description
            </Label>
            <Input onBlur={(e)=> setDescription(e.target.value)}  id="description"  className="col-span-3" />
          </div>
          <DialogFooter >
          <DialogClose asChild>
          <Button type="submit">Save changes</Button>
          </DialogClose> 
        </DialogFooter>
        </form>
  
      </DialogContent>
    </Dialog> 
  );
};

export default AddTodoModal;