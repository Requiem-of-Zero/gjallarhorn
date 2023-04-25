import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useRouter } from "next/router";
import * as React from "react";
import { UserAuth } from "../../../context/AuthContext";
import Bag from "../../Bag/Bag";

export default function FooterNavigation({ setSidebar, sidebar, theme }) {
  const [value, setValue] = React.useState("Home");
  const { user } = UserAuth();
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      id="bottomNav"
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
        onClick={() => {
          if (user) {
            router.push("/profile");
          } else {
            router.push("/login");
          }
        }}
      />
      <BottomNavigationAction
        label="My Cart"
        value="cart"
        icon={<Bag />}
        onClick={() => router.push("/cart")}
      />
      {/* <BottomNavigationAction
        label="Search"
        value="search"
        icon={<SearchIcon />}
      /> */}
      <BottomNavigationAction
        label="Menu"
        value="menu"
        icon={<MenuIcon onClick={() => setSidebar(!sidebar)} />}
      />
    </BottomNavigation>
  );
}
