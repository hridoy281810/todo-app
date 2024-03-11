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

const TodoDropDown = () => {
    const [position, setPosition] = useState("medium")
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
    <Button className='bg-primary-gradient text-xl  font-semibold'>Filter Todo</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56 p-4 text-xl">
      <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
        <DropdownMenuRadioItem value="High">High</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="medium">medium</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="Low">Low</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
  );
};

export default TodoDropDown;