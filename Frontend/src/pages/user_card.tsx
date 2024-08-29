import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface cardType {
  title: string;
  content: string;
}

export default function CardComponent({ title, content }: cardType) {
  return (
    <Card className="w-[350px] hover:bg-slate-100">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-xl font-black color-black">
          {content}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
