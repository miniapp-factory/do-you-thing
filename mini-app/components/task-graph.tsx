import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function TaskGraph({ tasks }: { tasks: any[] }) {
  const completed = tasks.filter((t) => t.completed).length;
  const total = tasks.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <h3 className="text-lg font-semibold">Task Completion</h3>
      </CardHeader>
      <CardContent>
        <div className="h-4 bg-muted rounded">
          <div
            className="h-4 bg-primary rounded"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {percent}% completed ({completed}/{total})
        </p>
      </CardContent>
    </Card>
  );
}
