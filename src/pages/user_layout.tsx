import CardComponent from "./user_card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { Link, useLocation } from "react-router-dom";

export default function UserLayout() {
  const location = useLocation()
  const { pathname } = location;
  return (
    <div>
      <div className="flex justify-evenly p-5">
        <CardComponent title="Amount" content="125688" />
        <CardComponent title="Donations" content="34524" />
        <CardComponent title="Organisations Donated" content="20" />
        <CardComponent title="Organisations Listed" content="500" />
      </div>
      <div className="pl-20">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/user/dashboard">
                <NavigationMenuLink
                  className={`text-base font-semibold ${(pathname=="/user/dashboard") ? 'bg-slate-200' : 'inactive-class'} ${navigationMenuTriggerStyle()}`}
                >
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/user/organisation">
                <NavigationMenuLink
                  className={`text-base font-semibold ${navigationMenuTriggerStyle()}`}
                >
                  Organisations
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/user/transactions">
                <NavigationMenuLink
                  className={`text-base font-semibold ${navigationMenuTriggerStyle()}`}
                >
                  Transactions
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
