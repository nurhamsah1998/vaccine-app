import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Drawer from './component/Drawer';
import { useQuery } from 'react-query';
import axios from 'axios';
import { green, indigo, blue, deepOrange, deepPurple, cyan } from '@mui/material/colors';

function test() {
  const { data, isLoading } = useQuery('get', async () => {
    return await axios.get('http://localhost:8000/get');
  });
  const userGender = data?.data?.map((e) => {
    return e.gender;
  });
  const femaleGender = userGender?.filter((e) => {
    return e == 'perempuan';
  });
  const maleGender = userGender?.filter((e) => {
    return e == 'laki-laki';
  });
  return (
    <Drawer label="DASBOARD">
      <Grid gap={4} container direction="row" justifyContent="center" alignItems="flex-start">
        <Grid
          sx={{
            bgcolor: indigo[500],
            height: 230,
            width: 430,
            borderRadius: '12px',
            transition: 'all 0.4s',
            '&:hover': {
              boxShadow: 5,
              transform: 'translateY(-10px)',
              bgcolor: indigo[600],
            },
          }}
          item
        >
          <Box sx={{ p: 2, position: 'relative', height: '100%' }}>
            <Typography fontSize={23} fontWeight={700} color="white">
              Detail Sekolah
            </Typography>
            <Box display="flex" sx={{ mt: 2 }} justifyContent="space-between" color="white">
              <Box>
                <Typography>Jumlah Siswa Laki - Laki</Typography>
                <Typography>Jumlah Siswa Perempuan</Typography>
              </Box>
              <Box>
                <Typography>{maleGender?.length} Siswa</Typography>
                <Typography>{femaleGender?.length} Siswa</Typography>
              </Box>
            </Box>
            <Box sx={{ position: 'absolute', bottom: '0px', right: '0px', p: 2 }}>
              <Typography fontSize={23} color="white">
                {femaleGender?.length + maleGender?.length} Total Siswa
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            bgcolor: blue[500],
            height: 230,
            width: 430,
            borderRadius: '12px',
            transition: 'all 0.4s',
            '&:hover': {
              boxShadow: 5,
              transform: 'translateY(-10px)',
              bgcolor: blue[600],
            },
          }}
          item
        >
          <Box sx={{ p: 2, position: 'relative', height: '100%' }}>
            <Typography fontSize={23} fontWeight={700} color="white">
              Siswa Terbaik
            </Typography>
            <Typography fontSize={15} fontWeight={400} marginTop="-5px" color="white">
              Hasil berdasarkan total nilai danem terbaik.
            </Typography>
            <Box display="flex" sx={{ mt: 1 }} justifyContent="space-between" color="white">
              <Box>
                <Typography>Nurhamsh</Typography>
                <Typography>Agung Sasmitro</Typography>
                <Typography>Nadya Dwi Arini</Typography>
                <Typography>Jaka Erlangga Saputra</Typography>
                <Typography>Laili Febriani</Typography>
              </Box>
              <Box>
                <Typography>(32.2)</Typography>
                <Typography>(32.1)</Typography>
                <Typography>(28.6)</Typography>
                <Typography>(28.2)</Typography>
                <Typography>(28.0)</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            bgcolor: green[500],
            height: 230,
            width: 430,
            borderRadius: '12px',
            transition: 'all 0.4s',
            '&:hover': {
              boxShadow: 5,
              transform: 'translateY(-10px)',
              bgcolor: green[600],
            },
          }}
          item
        >
          <Box sx={{ p: 2, position: 'relative', height: '100%' }}>
            <Typography fontSize={23} fontWeight={700} color="white">
              Dana BOSS
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
            <Box sx={{ position: 'absolute', bottom: '0px', right: '0px', p: 2 }}>
              <Typography fontSize={23} color="white">
                Rp5.000.789.000
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            bgcolor: deepOrange[500],
            height: 230,
            width: 430,
            borderRadius: '12px',
            transition: 'all 0.4s',
            '&:hover': {
              boxShadow: 5,
              transform: 'translateY(-10px)',
              bgcolor: deepOrange[600],
            },
          }}
          item
        >
          <Box sx={{ p: 2, position: 'relative', height: '100%' }}>
            <Typography fontSize={23} fontWeight={700} color="white">
              Pengeluaran
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
            <Box sx={{ position: 'absolute', bottom: '0px', right: '0px', p: 2 }}>
              <Typography fontSize={23} color="white">
                Rp3.600.000
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            bgcolor: deepPurple[500],
            height: 230,
            width: 430,
            borderRadius: '12px',
            transition: 'all 0.4s',
            '&:hover': {
              boxShadow: 5,
              transform: 'translateY(-10px)',
              bgcolor: deepPurple[600],
            },
          }}
          item
        >
          <Box sx={{ p: 2, position: 'relative', height: '100%' }}>
            <Typography fontSize={23} fontWeight={700} color="white">
              Tamu
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
            {/* <Box sx={{ position: 'absolute', bottom: '0px', right: '0px', p: 2 }}>
              <Typography fontSize={23} color="white">
                856 Total Siswa
              </Typography>
            </Box> */}
          </Box>
        </Grid>
        <Grid
          sx={{
            bgcolor: cyan[500],
            height: 230,
            width: 430,
            borderRadius: '12px',
            transition: 'all 0.4s',
            '&:hover': {
              boxShadow: 5,
              transform: 'translateY(-10px)',
              bgcolor: cyan[600],
            },
          }}
          item
        >
          <Box sx={{ p: 2, position: 'relative', height: '100%' }}>
            <Typography fontSize={23} fontWeight={700} color="white">
              Acara Sekolah
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
            <Box sx={{ position: 'absolute', bottom: '0px', right: '0px', p: 2 }}>
              <Typography fontSize={23} color="white">
                856 Total Siswa
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Drawer>
  );
}

export default test;
