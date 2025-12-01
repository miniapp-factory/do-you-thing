import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function Reminder({ tasks }: { tasks: any[] }) {
  const remaining = tasks.filter((t) => !t.completed);

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <h3 className="text-lg font-semibold">Upcoming Tasks</h3>
      </CardHeader>
      <CardContent>
        {remaining.length ? (
          <ul className="list-disc pl-5 space-y-1">
            {remaining.map((t) => (
              <li key={t.id}>
                {t.title} (Due: {t.deadline})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">
            No remaining tasks. Great job!
          </p>
        )}
      </CardContent>
    </Card>
  );
}
