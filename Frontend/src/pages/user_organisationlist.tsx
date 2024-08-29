import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()
  const filteredData = notifications.filter((notification) => {
    if (inputText === "") {
      return notification;
    } else {
      return notification.title.toLowerCase().includes(inputText);
    }
  });
  const handleDonateClick = (title: string) => {
    // Encode the title to make it URL-safe
    const encodedTitle = encodeURIComponent(title);
    console.log(encodedTitle)
    // Navigate to the donation page with the title as a query parameter
    // navigate(`/donation?title=${encodedTitle}`);
  };
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
              <Button onClick={()=>{handleDonateClick(notification.title)}}>Donate</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
