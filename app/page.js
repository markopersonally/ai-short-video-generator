import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2>Test</h2>
      <Button variant="destructive">Test</Button>

      <UserButton />
    </div>
  );
}
