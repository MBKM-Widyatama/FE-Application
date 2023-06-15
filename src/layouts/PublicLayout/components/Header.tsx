import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

// MUI Components
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Custom Components
import Button from '@components/Button'

// assets
import { ICBimaUtama } from '@utama/assets/icons'

interface NavMenu {
  label: string
  path: string
}

export default function Header() {
  const router = useRouter()

  const navMenu: NavMenu[] = [
    {
      label: 'Guide',
      path: '',
    },
    {
      label: 'About BIMAUTAMA',
      path: '',
    },
    {
      label: 'Annoucements',
      path: '',
    },
    {
      label: 'News',
      path: '',
    },
  ]

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: '50px 100px' }}
    >
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src={ICBimaUtama}
          alt="Icon Bima Utama"
          width={28}
          height={28}
        ></Image>
        <Typography
          variant="h6"
          className="font-montserrat"
          sx={{ marginLeft: 1.25, fontWeight: 'bold' }}
          onClick={() => router.push('/landing')}
        >
          SIMLITAMAS UTAMA
        </Typography>
      </Grid>
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        {navMenu.map((item: NavMenu) => (
          <Typography
            key={item.path}
            sx={{ marginRight: 5, fontWeight: 600 }}
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </Typography>
        ))}
      </Grid>
      <Grid item>
        <Button label="Sign In" onClick={() => {}} />
      </Grid>
    </Grid>
  )
}
