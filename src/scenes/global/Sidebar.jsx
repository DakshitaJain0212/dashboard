import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography  style={{ fontSize: '20px' }}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
          borderRadius: '20px',
          overflow: 'hidden',
         
      }}
    >
      <ProSidebar collapsed={isCollapsed} >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={
              isCollapsed ? (
                <ArrowCircleLeftOutlinedIcon style={{ fontSize: 30 }} />
              ) : undefined
            }
            style={{
              
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                margin= "10px 0 20px 150px"
              >
                {/* <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography> */}
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <ArrowCircleLeftOutlinedIcon style={{ fontSize: 30 }} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box display="flex" alignItems="center" mb="40px">
              <Box mr="10px">
                <InboxOutlinedIcon
                  style={{
                    marginLeft: "30px",
                    marginTop: "20px",
                    fontSize: 70,
                    color: "black",
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Catalix
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>

            <div style={{ padding: " 10px 30px 30px 0" }}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon style={{ fontSize: 20 }}/>}
                selected={selected}
                setSelected={setSelected}
               
              />
            </div>



            <div style={{ padding: " 10px 30px 30px 0" }}>
              <Item
                title="Activities"
                to="/calendar"
                icon={<TimerOutlinedIcon  style={{ fontSize: 20 }}/>}
                selected={selected}
                setSelected={setSelected}
               
              />
            </div>

            <div style={{ padding: " 10px 30px 30px 0" }}>
              <Item
                title="Analytics"
                to="/"
                icon={<InsertChartOutlinedRoundedIcon style={{ fontSize: 20 }}/>}
                selected={selected}
                setSelected={setSelected}
               
              />
            </div>

            <div style={{ padding: " 10px 30px 30px 0" }}>
              <Item
                title="Transformation"
                to="/"
                icon={<RocketLaunchOutlinedIcon  style={{ fontSize: 20 }}/>}
                selected={selected}
                setSelected={setSelected}
               
              />
            </div>


            <div style={{ padding: " 10px 30px 30px 0" }}>
              <Item
                title="Library"
                to="/"
                icon={<TableRowsOutlinedIcon style={{ fontSize: 20 }}/>}
                selected={selected}
                setSelected={setSelected}
               
              />
            </div>

            <hr style={{width: "250px", color: "gray", marginLeft: "5px"}}/>
            <div style={{ padding: " 10px 30px 30px 0" }}>
              <Item
                title="Settings"
                to="/"
                icon={<SettingsIcon style={{ fontSize: 20 }}/>}
                selected={selected}
                setSelected={setSelected}
               
              />
            </div>


            <div style={{ padding: " 10px 30px 30px 0" }}>
              <Item
                title="Logout"
                to="/"
                icon={<LogoutOutlinedIcon style={{ fontSize: 20 }}/>}
                selected={selected}
                setSelected={setSelected}
               
              />
            </div>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
