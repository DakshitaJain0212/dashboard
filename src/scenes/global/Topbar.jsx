import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        marginLeft="80px"
        width="600px"
        
      >
        <InputBase sx={{ ml: 3, flex: 1 }} placeholder="Search  by  profile,  setting,  artifact  etc.." />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
       <Box display="flex">
      <Box sx={{
        border: '0.4px solid rgba(0, 0, 0, 0.2)', // Adjust border properties as needed
        borderRadius: '50%',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        marginRight: "7px" // Adjust shadow properties as needed
      }}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
      <Box sx={{
        border: '0.4px solid rgba(0, 0, 0, 0.2)', // Adjust border properties as needed
        borderRadius: '50%',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        marginRight: "7px" // Adjust shadow properties as needed
      }}>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
      </Box>
      <Box sx={{
        border: '0.4px solid rgba(0, 0, 0, 0.2)', // Adjust border properties as needed
        borderRadius: '50%',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        marginRight: "7px" // Adjust shadow properties as needed
      }}>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
      <Box sx={{
        border: '0.4px solid rgba(0, 0, 0, 0.2)', // Adjust border properties as needed
        borderRadius: '50%',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        marginRight: "7px" // Adjust shadow properties as needed
      }}>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
    </Box>
  );
};

export default Topbar;
