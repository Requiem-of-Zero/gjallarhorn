import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import Bag from "../Bag/Bag";
import { useRouter } from "next/router";

export default function FooterNavigation() {
  const [value, setValue] = React.useState("Home");
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      id="bottomNav"
      className="sticky bottom-0 w-screen"
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
      />
      <BottomNavigationAction label="My Cart" value="cart" icon={<Bag />} />
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction label="Menu" value="menu" icon={<MenuIcon />} />
    </BottomNavigation>
  );
}
