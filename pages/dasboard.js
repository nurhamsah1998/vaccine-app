import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Drawer from "./component/Drawer";
import { green, indigo, blue } from "@mui/material/colors";

function test() {
  return (
    <Drawer label="DASBOARD">
      <Grid gap={4} container direction="row" justifyContent="center" alignItems="flex-start">
        <Grid
          sx={{
            bgcolor: green[500],
            height: 230,
            width: 430,
            borderRadius: "12px",
            boxShadow: 5,
          }}
          item
        >
          <Box sx={{ p: 3, position: "relative", height: "100%" }}>
            <Typography fontSize={23} fontWeight={700} color="white">
              Detail Siswa
            </Typography>
            <Box display="flex" sx={{ mt: 2 }} justifyContent="space-between" color="white">
              <Box>
                <Typography>Jumlah Siswa Laki - Laki</Typography>
                <Typography>Jumlah Siswa Perempuan</Typography>
              </Box>
              <Box>
                <Typography>200 Siswa</Typography>
                <Typography>230 Siswa</Typography>
              </Box>
            </Box>
            <Box sx={{ position: "absolute", bottom: "0px", right: "0px", p: 3 }}>
              <Typography fontSize={23} color="white">
                856 Total Siswa
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{ bgcolor: indigo[500], height: 230, width: 430, borderRadius: "12px" }}
          item
        ></Grid>
        <Grid
          sx={{ bgcolor: blue[500], height: 230, width: 430, borderRadius: "12px" }}
          item
        ></Grid>
      </Grid>
    </Drawer>
  );
}

export default test;
