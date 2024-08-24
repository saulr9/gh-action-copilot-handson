import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";

const LOGO =
  "https://cdn.prod.website-files.com/5ff9f08ad0f45f13b2c0e743/5ff9f651d25a5e4c33cc543f_LogoCleverit.svg";
const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-white py-4">
      <div className="container flex items-center justify-between">
        <img src={LOGO} alt="Logo" className="mr-4 max-w-36" />
        <NavigationMenu>
          <NavigationMenuList className="navigation-menu-list flex gap-5">
            <NavigationMenuItem className={`navigation-menu-item `}>
              <NavigationMenuTrigger className="navigation-menu-trigger font-bold">
                Home
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem className={`navigation-menu-item `}>
              <NavigationMenuTrigger className="navigation-menu-trigger">
                History
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem className="navigation-menu-item">
              <NavigationMenuTrigger className="navigation-menu-trigger">
                Withdraw
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem className="navigation-menu-item">
              <NavigationMenuTrigger className="navigation-menu-trigger">
                Deposit
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem className="navigation-menu-item">
              <NavigationMenuTrigger className="navigation-menu-trigger">
                Logout
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
