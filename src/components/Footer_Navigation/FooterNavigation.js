import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function FooterNavigation() {
  const [value, setValue] = React.useState("Home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation className='sticky bottom-0 w-screen' value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
}
