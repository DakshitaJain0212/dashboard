import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import StatBox from "../../components/StatBox";

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import Invoices from "../invoices";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex"  alignItems="center">
      <Box>
          <Button
            sx={{
             border: "0.5px solid gray",
             borderRadius: "30px",
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "7px 30px",
              marginBottom: "40px",
              marginRight: "30px",
              width: "300px",

            }}
          >
            <AddOutlinedIcon sx={{ mr: "10px" }} />
            Create Request
          </Button>
        </Box>
        <Box>
          <Button
            sx={{
             border: "0.5px solid gray",
             borderRadius: "30px",
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "7px 30px",
              marginBottom: "40px",
              marginRight: "30px",
              width: "300px",

            }}
          >
            Share this dashboard
          </Button>
        </Box>
        <Box>
          <Button
            sx={{
             border: "0.5px solid gray",
             borderRadius: "30px",
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "7px 30px",
              marginBottom: "40px",
              marginRight: "30px",
              width: "300px",

            }}
          >
            
           Select Duration
          </Button>
        </Box>

        <Box>
          <Button
            sx={{
             border: "0.5px solid gray",
             borderRadius: "30px",
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "7px 30px",
              marginBottom: "40px",
              marginRight: "30px",
              width: "300px",

            }}
          >
            Compare with Duration
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        

        <Box
  gridColumn="span 3"
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  // justifyContent="center"
  borderRadius="10px"
  padding="20px"
>
  <Box display="flex" flexDirection="column" marginTop="10px">
    {/* <Box
      component="img"
      src={shLogo}
      alt="SH Logo"
      width="40px"
      height="40px"
      marginBottom="10px"
    /> */}
    <Box
      fontSize="20px"
      
      color={colors.greenAccent[500]}
      marginBottom="2px"
    >
      EFFICIENCY
    </Box>
    <Box fontSize="10px" color={colors.grey[100]} marginBottom="7px">
      lorem ipeolm
    </Box>
    <Box
      fontSize="25px"
      color={colors.greenAccent[500]}
      fontWeight="bold"
      marginBottom="1px"
    >
      +1.1921 
    </Box>
    <Box
      fontSize="15px"
      color={colors.greenAccent[500]}
      marginBottom="6px"
    >
      +0.0015% (+0.13)
    </Box>
    <Box fontSize="10px" color={colors.grey[100]} marginBottom="10px">
      0.00 USD
    </Box>
  </Box>
</Box>


<Box
  gridColumn="span 3"
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  // justifyContent="center"
  borderRadius="10px"
  padding="20px"
>
  <Box display="flex" flexDirection="column" marginTop="10px">
    {/* <Box
      component="img"
      src={shLogo}
      alt="SH Logo"
      width="40px"
      height="40px"
      marginBottom="10px"
    /> */}
    <Box
      fontSize="20px"
      
      color={colors.greenAccent[500]}
      marginBottom="2px"
    >
      TIME TO MARKET
    </Box>
    <Box fontSize="10px" color={colors.grey[100]} marginBottom="7px">
      lorem ipeolm
    </Box>
    <Box
      fontSize="25px"
      color={colors.greenAccent[500]}
      fontWeight="bold"
      marginBottom="1px"
    >
      +1.1921 
    </Box>
    <Box
      fontSize="15px"
      color={colors.greenAccent[500]}
      marginBottom="6px"
    >
      +0.0015% (+0.13)
    </Box>
    <Box fontSize="10px" color={colors.grey[100]} marginBottom="10px">
      0.00 USD
    </Box>
  </Box>
</Box>
<Box
  gridColumn="span 3"
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  // justifyContent="center"
  borderRadius="10px"
  padding="20px"
>
  <Box display="flex" flexDirection="column" marginTop="10px">
    {/* <Box
      component="img"
      src={shLogo}
      alt="SH Logo"
      width="40px"
      height="40px"
      marginBottom="10px"
    /> */}
    <Box
      fontSize="20px"
      
      color={colors.greenAccent[500]}
      marginBottom="2px"
    >
      TECH DEBT
    </Box>
    <Box fontSize="10px" color={colors.grey[100]} marginBottom="7px">
      lorem ipeolm
    </Box>
    <Box
      fontSize="25px"
      color={colors.greenAccent[500]}
      fontWeight="bold"
      marginBottom="1px"
    >
      +1.1921 
    </Box>
    <Box
      fontSize="15px"
      color={colors.greenAccent[500]}
      marginBottom="6px"
    >
      +0.0015% (+0.13)
    </Box>
    <Box fontSize="10px" color={colors.grey[100]} marginBottom="10px">
      0.00 USD
    </Box>
  </Box>
</Box>
<Box
  gridColumn="span 3"
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  // justifyContent="center"
  borderRadius="10px"
  padding="20px"
>
  <Box display="flex" flexDirection="column" marginTop="10px">
    {/* <Box
      component="img"
      src={shLogo}
      alt="SH Logo"
      width="40px"
      height="40px"
      marginBottom="10px"
    /> */}
    <Box
      fontSize="20px"
      
      color={colors.greenAccent[500]}
      marginBottom="2px"
    >
      PREDICTABILITY
    </Box>
    <Box fontSize="10px" color={colors.grey[100]} marginBottom="7px">
      lorem ipeolm
    </Box>
    <Box
      fontSize="25px"
      color={colors.greenAccent[500]}
      fontWeight="bold"
      marginBottom="1px"
    >
      +1.1921 
    </Box>
    <Box
      fontSize="15px"
      color={colors.greenAccent[500]}
      marginBottom="6px"
    >
      +0.0015% (+0.13)
    </Box>
    <Box fontSize="10px" color={colors.grey[100]} marginBottom="10px">
      0.00 USD
    </Box>
  </Box>
</Box>


        {/* Row 2 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius= "10px"
          
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius= "10px"
          
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius= "10px"
          
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius= "10px"
          
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 12"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
        >
          <Invoices/>
        </Box>

        {/* ROW 3 */}
        
       
      </Box>
    </Box>
  );
};

export default Dashboard;
