import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="mx-auto mt-8 flex flex-col items-center justify-center">
      <Loader2 className="animate-spin" />
      <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
    </div>
  );
};

export default Loader;
