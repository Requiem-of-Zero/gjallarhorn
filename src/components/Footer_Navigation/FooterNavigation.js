import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import Bag from "../Bag/Bag";
import { useRouter } from "next/router";

export default function FooterNavigation({ setSidebar, sidebar, theme }) {
  const [value, setValue] = React.useState("Home");
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      id='bottomNav'
      className="bottom_nav sticky bottom-0 w-screen z-10"
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="Home"
        icon={<HomeIcon />}
        onClick={() => router.push("/")}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PersonIcon />}
        onClick={() => router.push("/login")}
      />
      <BottomNavigationAction
        label="My Cart"
        value="cart"
        icon={<Bag />}
        onClick={() => router.push("/cart")}
      />
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Menu"
        value="menu"
        icon={<MenuIcon onClick={() => setSidebar(!sidebar)} />}
      />
    </BottomNavigation>
  );
}
