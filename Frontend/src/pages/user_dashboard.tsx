import UserLayout from "./user_layout";
import { UserCardNotification } from "./user_notification";
import UserAppbar from "./user_appbar";
import { UserListingTable } from "./user_listingtable";
export default function Dashboard() {
  return (
    <div>
      <div>
        <UserAppbar />
      </div>
    <div className="px-10 pb-10 pt-5">
      <div>
        <h1 className="text-2xl font-black">Dashboard</h1>
      </div>
      <div>
        <UserLayout />
      </div>
      <div className="grid grid-cols-4 gap-4 p-5">
        <div className="col-span-3">
          <UserListingTable />
        </div>
        <div>
          <UserCardNotification />
        </div>
      </div>
    </div>
    </div>
  );
}
