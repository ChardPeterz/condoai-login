import AccountBalance from "@mui/icons-material/AccountBalance";
import Add from "@mui/icons-material/Add";
import Apartment from "@mui/icons-material/Apartment";
import AttachMoney from "@mui/icons-material/AttachMoney";
import Cancel from "@mui/icons-material/Cancel";
import Check from "@mui/icons-material/Check";
import Dashboard from "@mui/icons-material/Dashboard";
import Description from "@mui/icons-material/Description";
import Message from "@mui/icons-material/Message";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import Notifications from "@mui/icons-material/Notifications";
import People from "@mui/icons-material/People";
import Search from "@mui/icons-material/Search";
import Share from "@mui/icons-material/Share";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const ManagerDashboard = () => {
  return (
    <Box
      sx={{
        bgcolor: "#eefff1",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box sx={{ bgcolor: "green.50", width: "1920px", height: "1024px" }}>
        <Box
          sx={{ display: "flex", width: "1920px", p: 4, position: "relative" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "220px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography variant="h6">Condo AI</Typography>
              <IconButton>
                <Cancel />
              </IconButton>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <Box sx={{ borderBottom: 1, borderColor: "divider", pb: 2 }}>
                <Typography variant="subtitle1">Insights</Typography>
                <Button
                  startIcon={<Dashboard />}
                  sx={{
                    bgcolor: "green.600",
                    color: "white",
                    width: "100%",
                    mt: 1,
                  }}
                >
                  Dashboard
                </Button>
              </Box>
              <Box sx={{ borderBottom: 1, borderColor: "divider", py: 2 }}>
                <Typography variant="subtitle1">AI Managers</Typography>
                <Button startIcon={<Share />} sx={{ width: "100%", mt: 1 }}>
                  Assets
                </Button>
                <Button
                  startIcon={<Description />}
                  sx={{ width: "100%", mt: 1 }}
                >
                  Bids & Quotes
                </Button>
                <Button startIcon={<Folder />} sx={{ width: "100%", mt: 1 }}>
                  Documents
                </Button>
                <Button
                  startIcon={<AttachMoney />}
                  sx={{ width: "100%", mt: 1 }}
                >
                  Finance
                </Button>
                <Button
                  startIcon={<AccountBalance />}
                  sx={{ width: "100%", mt: 1 }}
                >
                  Governance
                </Button>
                <Button startIcon={<People />} sx={{ width: "100%", mt: 1 }}>
                  Meetings
                </Button>
                <Button startIcon={<Apartment />} sx={{ width: "100%", mt: 1 }}>
                  Units
                </Button>
              </Box>
              <Box sx={{ py: 2 }}>
                <Button startIcon={<Message />} sx={{ width: "100%", mt: 1 }}>
                  Communications
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "white",
                p: 1,
                borderRadius: 1,
              }}
            >
              <Avatar
                src="/img/avatar.png"
                sx={{ width: 48, height: 48, mr: 2 }}
              />
              <Box>
                <Typography variant="body1">Manager</Typography>
                <Typography variant="body2">Douglas Baker</Typography>
              </Box>
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              bgcolor: "white",
              borderRadius: 2,
              p: 4,
              ml: 4,
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}
            >
              <TextField
                variant="outlined"
                placeholder="Search or ask AI Field"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: "60%" }}
              />
              <Button variant="contained" color="primary" startIcon={<Add />}>
                Add New
              </Button>
            </Box>
            <Typography variant="h4" gutterBottom>
              Insights
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Dashboard sx={{ fontSize: 40, mr: 2 }} />
                      <Box>
                        <Typography variant="h5">70</Typography>
                        <Typography variant="body2">
                          Total Number of Units
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                      }}
                    >
                      <Typography variant="body2">40 Residential</Typography>
                      <Typography variant="body2">5 Urban</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Description sx={{ fontSize: 40, mr: 2 }} />
                      <Box>
                        <Typography variant="h5">356</Typography>
                        <Typography variant="body2">
                          Number of Requests
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                      }}
                    >
                      <Typography variant="body2">15 Gen.</Typography>
                      <Typography variant="body2">20 Maint.</Typography>
                      <Typography variant="body2">15 archit.</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
              What’s up for Today?
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          width: 7,
                          height: "100%",
                          bgcolor: "orange.400",
                          mr: 2,
                        }}
                      />
                      <Box>
                        <Typography variant="h6">
                          Meeting with investors
                        </Typography>
                        <Typography variant="body2">
                          Lorem ipsum dolor sit amet consectetur. Nunc amet
                          cursus urna accumsan duis semper pellentesque
                        </Typography>
                      </Box>
                      <IconButton>
                        <Check />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          width: 7,
                          height: "100%",
                          bgcolor: "violet.400",
                          mr: 2,
                        }}
                      />
                      <Box>
                        <Typography variant="h6">
                          Submit blockchain contract
                        </Typography>
                        <Typography variant="body2">
                          Lorem ipsum dolor sit amet consectetur. Nunc amet
                          cursus urna
                        </Typography>
                      </Box>
                      <IconButton>
                        <Check />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          width: 7,
                          height: "100%",
                          bgcolor: "blue.400",
                          mr: 2,
                        }}
                      />
                      <Box>
                        <Typography variant="h6">
                          Follow up on progress report
                        </Typography>
                        <Typography variant="body2">
                          Lorem ipsum dolor sit amet consectetur. Nunc amet
                          cursus urna accumsan duis semper pellentesque. Egestas
                          sit rutrum diam id.
                        </Typography>
                      </Box>
                      <IconButton>
                        <Check />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              width: "366px",
              display: "flex",
              flexDirection: "column",
              bgcolor: "orange.50",
              borderRadius: 2,
              p: 4,
              ml: 4,
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}
            >
              <Typography variant="h6">Calendar</Typography>
              <IconButton>
                <Notifications />
              </IconButton>
            </Box>
            <List>
              <ListItem>
                <ListItemText primary="December 1, 2024" />
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="07:00 AM"
                  secondary="Lorem ipsum - Financial Audit"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="10:00 AM"
                  secondary="Some Text - Payment of invoices"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="12:00 PM"
                  secondary="Figma ipsum - Figma ipsum component"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="January 1, 2025" />
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="07:00 AM"
                  secondary="Lorem ipsum - Financial Audit"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="10:00 AM"
                  secondary="Some Text - Payment of invoices"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="12:00 PM"
                  secondary="Figma ipsum - Figma ipsum component"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="March 30, 2025" />
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="07:00 AM"
                  secondary="Lorem ipsum - Financial Audit"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="10:00 AM"
                  secondary="Some Text - Payment of invoices"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="12:00 PM"
                  secondary="Figma ipsum - Figma ipsum component"
                />
              </ListItem>
            </List>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}
            >
              <Avatar src="/img/quick-message.png" />
              <Avatar src="/img/quick-message-1.png" />
              <Avatar src="/img/quick-message-2.png" />
              <Avatar src="/img/quick-message-3.png" />
              <Avatar src="/img/quick-message-4.png" />
              <IconButton>
                <Message />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
