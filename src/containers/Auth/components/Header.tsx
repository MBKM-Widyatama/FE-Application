import React from 'react'
import Image from 'next/image'

// MUI Components
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Custom Components
import Button from '@components/Button'

// assets
import { ICBimaUtama } from '@utama/assets/icons'

export default function Header() {
  return (
    <Grid container sx={{ px: 12.5, py: 6.25 }}>
      <Grid item flex={1} sx={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src={ICBimaUtama}
          alt="Icon Bima Utama"
          width={28}
          height={28}
        ></Image>
        <Typography
          variant="h5"
          fontWeight="bold"
          className="font-montserrat"
          sx={{ ml: 1.25 }}
        >
          SIMLITAMAS UTAMA
        </Typography>
      </Grid>
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ mr: 1.5 }}>Don’t have an account?</Typography>
        <Button label="Sign Up" onClick={() => {}} />
      </Grid>
    </Grid>
  )
}
