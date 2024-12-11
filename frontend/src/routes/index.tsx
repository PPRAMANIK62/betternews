import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  throw new Error("Test Error");
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Button>Hello, World!</Button>
    </div>
  );
}
