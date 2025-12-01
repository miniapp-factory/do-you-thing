"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Task {
  id: number;
  title: string;
  deadline: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
}

export function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Finish project proposal",
      deadline: "2025-12-10",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Buy groceries",
      deadline: "2025-12-05",
      priority: "Medium",
      completed: false,
    },
    {
      id: 3,
      title: "Read design patterns book",
      deadline: "2025-12-20",
      priority: "Low",
      completed: false,
    },
  ]);

  const toggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <h2 className="text-xl font-semibold">To‑Do List</h2>
      </CardHeader>
      <CardContent className="grid gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-2 rounded-md border"
          >
            <div className="flex items-center gap-2">
              <Checkbox
                id={`task-${task.id}`}
                checked={task.completed}
                onCheckedChange={() => toggleComplete(task.id)}
              />
              <Label htmlFor={`task-${task.id}`} className="flex-1">
                <span
                  className={`${
                    task.completed ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {task.title}
                </span>
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={task.priority === "High" ? "destructive" : task.priority === "Medium" ? "secondary" : "outline"}>
                {task.priority}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {task.deadline}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
