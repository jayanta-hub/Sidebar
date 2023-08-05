import { Outlet } from "react-router-dom";
import Sidebar from "../ReusableComponents/Sidebar";
import { Grid } from "@mui/material";

const PageLayout = () => (
  <Grid container>
    <Grid item md={3} lg={3} sm={3}>
      <Sidebar />
    </Grid>
    <Grid item md={9} lg={9} sm={9}>
      <Outlet />
    </Grid>
  </Grid>
);
export default PageLayout;
