import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";
import Drawer from "./component/Drawer";
import AddingPatient from "./component/Form/AddingPatient";
import Image from "next/image";

function nur() {
  return (
    <Drawer label="TAMBAH CALON VAKSIN">
      <Grid container>
        <Grid item>
          <Typography variant="h6" fontWeight={600} color="#319e8e">
            MOHON BACA INSTRUKSI!
          </Typography>
          <Typography maxWidth="600px" marginBottom={"30px"} fontWeight={400} color="#4f8c83">
            Sesuaikan data calon pendaftar vaksin dengan benar. cek kembali lagi agar tidak terjadi
            miss informasi. karena data ini akan terkirim ke server pemerintah gotham untuk disurvey
            lagi sebagai pengecekan jumlah dosis vaksin covid-19
          </Typography>
          <AddingPatient />
        </Grid>
        <Grid item>{/* <Image src={}/> */}</Grid>
      </Grid>
    </Drawer>
  );
}

export default nur;
