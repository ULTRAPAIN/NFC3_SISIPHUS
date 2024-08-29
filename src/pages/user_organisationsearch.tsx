import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import UserOrganisationList from "./user_organisationlist";

type CardProps = React.ComponentProps<typeof Card>;

export function UserOrganisationSearch({ className, ...props }: CardProps) {
  const [inputText, setinputText] = useState("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowercase = e.target.value.toLowerCase();
    setinputText(lowercase);
  };
  return (
    <div>
      <Card className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
          <CardTitle>List of Organisations</CardTitle>
        </CardHeader>
        <div className="m-5">

        <Input onChange={inputHandler} />
        </div>
        <CardContent className="grid gap-4">
          <ScrollArea className="p-5 h-72 w-65 rounded-md border">
            <UserOrganisationList inputText={inputText} />
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
