import UserLayout from "./user_layout";
import { UserCardNotification } from "./user_notification";
import UserAppbar from "./user_appbar";
import { UserOrganisationSearch } from "./user_organisationsearch";
export default function UserOrganisation() {
  return (
    <div>
    <div>
      <UserAppbar />
    </div>
    <div className="px-10 pb-10 pt-5">
      <div>
        <h1 className=" text-2xl font-black">Organisations</h1>
      </div>
      <div>
        <UserLayout />
      </div>
      <div className="grid grid-cols-4 gap-4 p-5">
        <div className="col-span-3">
          <UserOrganisationSearch className="w-full"/>
        </div>
        <div>
          <UserCardNotification />
        </div>
      </div>
    </div>
    </div>
  );
}
