import { Button } from "@/components/ui/button";
const notifications = [
  {
    title: "Disha Foundation",
    description: "1 hour ago",
  },
  {
    title: "ACT Foundation.",
    description: "1 hour ago",
  },
  {
    title: "Team Everest",
    description: "2 hours ago",
  },
  {
    title: "Child Vision and Education",
    description: "2 hours ago",
  },
  {
    title: "Aashapura Maa Foundation & Charitable Trust",
    description: "2 hours ago",
  },
  {
    title: "CRY (Child Rights and You)",
    description: "2 hours ago",
  },
  {
    title: "Smile Foundation",
    description: "2 hours ago",
  },
  {
    title: "GiveIndia Foundation",
    description: "2 hours ago",
  },
  {
    title: "HelpAge India",
    description: "2 hours ago",
  },
];

export default function UserOrganisationList({
  inputText,
}: {
  inputText: string;
}) {
  const filteredData = notifications.filter((notification) => {
    if (inputText === "") {
      return notification;
    } else {
      return notification.title.toLowerCase().includes(inputText);
    }
  });
  return (
    <div>
      {filteredData.map((notification, index) => (
        <div
          key={index}
          className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
        >
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-black" />
          <div className="space-y-1 grid grid-cols-6">
            <div className="col-span-5">
              <p className="text-base font-semibold leading-none">
                {notification.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {notification.description}
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <Button >Donate</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
