"use client";

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CalendarIcon, PlusIcon, ListIcon } from "lucide-react";

export function TaskMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Task menu">
          <ListIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Task</DropdownMenuLabel>
        <DropdownMenuItem>
          <ListIcon className="mr-2 size-4" />
          Upcoming Task
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PlusIcon className="mr-2 size-4" />
          Add Button Task
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CalendarIcon className="mr-2 size-4" />
          Calendar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
