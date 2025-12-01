"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarView } from "@/components/calendar-view";
import { TaskGraph } from "@/components/task-graph";
import { Reminder } from "@/components/reminder";
import { Button } from "@/components/ui/button";

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

  const [recentTask, setRecentTask] = useState<Task | null>(null);

  const addTask = (title: string, deadline: string, priority: "High" | "Medium" | "Low") => {
    const newTask: Task = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      deadline,
      priority,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setRecentTask(newTask);
  };

  const showRecentTask = () => {
    if (recentTask) {
      alert(`Recent Task: ${recentTask.title} (Due: ${recentTask.deadline})`);
    } else {
      alert("No recent task added yet.");
    }
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
      <div className="flex flex-col gap-4 mt-4">
        <div className="text-sm text-muted-foreground">
          Productivity: {Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)}%
        </div>
        <TaskGraph tasks={tasks} />
        <Reminder tasks={tasks} />
        <CalendarView tasks={tasks} />
        <div className="flex gap-2 mt-4">
        <Button
          variant="outline"
          onClick={() => {
            const title = prompt("Task title:");
            if (!title) return;
            const deadline = prompt("Deadline (YYYY-MM-DD):");
            if (!deadline) return;
            const priority = prompt("Priority (High, Medium, Low):") as
              | "High"
              | "Medium"
              | "Low";
            if (!priority) return;
            addTask(title, deadline, priority);
          }}
        >
          Add Task
        </Button>
        <Button variant="outline" onClick={showRecentTask}>
          Show Recent Task
        </Button>
      </div>
    </Card>
  );
}
