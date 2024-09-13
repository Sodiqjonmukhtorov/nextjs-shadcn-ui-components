import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Shadcn UI</h1>

      <Button variant="outline" className="mb-4">
        Custom Button
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a card content section where you can put any text or elements.</p>
        </CardContent>
        <CardFooter>
          <Button>Action Button</Button>
          <div className="border-border">Custom Border</div>
        </CardFooter>
      </Card>
    </div>
  );
}
