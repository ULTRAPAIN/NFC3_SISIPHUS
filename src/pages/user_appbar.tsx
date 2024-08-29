import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserAppbar() {
  return (
    <div className="grid grid-cols-2 border border-b-black">
      <div className="flex flex-col justify-center p-5 text-3xl font-black">
        <h1>CharityOnChain</h1>
      </div>
      <div className="flex justify-end p-5">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
