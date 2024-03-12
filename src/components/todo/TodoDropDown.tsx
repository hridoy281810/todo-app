import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { useState } from 'react';
import { Button } from '../ui/button';
type TPriority = {
  priority: string
  setPriority: string | boolean
}
const TodoDropDown = ({priority,setPriority}:TPriority) => {



  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
    <Button className='bg-primary-gradient text-xl  font-semibold'>Filter Todo</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56 p-4 text-xl">
      <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
        <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="medium">medium</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
  );
};

export default TodoDropDown;