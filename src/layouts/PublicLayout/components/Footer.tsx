import React from 'react'
import Image from 'next/image'

// MUI Components
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// assets
import { ICBimaUtama } from '@utama/assets/icons'
import { ILLandingBgBottom } from '@utama/assets/ilustrations'

interface SiteMap {
  label: string
  path: string
}

export default function Footer() {
  const menu: SiteMap[] = [
    { label: 'Guide', path: '' },
    { label: 'About BIMAUTAMA', path: '' },
    { label: 'Announcements', path: '' },
    { label: 'News', path: '' },
  ]

  const service: SiteMap[] = [
    { label: 'Blog', path: '' },
    { label: 'Email', path: '' },
    { label: 'Student Portal', path: '' },
    { label: 'Repository', path: '' },
  ]

  const otherLink: SiteMap[] = [
    { label: 'Academic', path: '' },
    { label: 'Career Center', path: '' },
    { label: 'Staffing', path: '' },
    { label: 'Library', path: '' },
    { label: 'Lecturer Portal', path: '' },
  ]

  return (
    <>
      <Grid
        container
        // align="top"
        // gutter={[30, 0]}
        style={{
          padding: '50px 100px',
          paddingBottom: 215,
          borderTop: '1px solid #EAEAEA',
        }}
      >
        <Grid item xs={5}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={ICBimaUtama}
              alt="Icon Bima Utama"
              width={28}
              height={28}
            ></Image>
            <Typography
              variant="h6"
              fontWeight="bold"
              className="font-montserrat"
              sx={{ mr: 2.5 }}
            >
              SIMLITAMAS UTAMA
            </Typography>
          </Box>
          <Typography sx={{ color: '#AAAAAA', my: 6.25 }}>
            Keeping a journal is the best way to record your travels in an
            ever-changing and evolving world. Discovering fresh knowledge is an
            endless adventure. Keep exploring the world with our journal app.
          </Typography>
          <Typography sx={{ color: '#AAAAAA' }}>
            Universitas Widyatama <br />
            Jl. Cikutra no 204 A Bandung <br />
            Jawa Barat, Indonesia 40124 <br />
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <Typography variant="h6" fontWeight={600} sx={{ mb: 6.25 }}>
            Menu
          </Typography>
          {menu.map((item: SiteMap) => (
            <Typography key={item.path} sx={{ color: '#AAAAAA', mb: 2 }}>
              {item.label}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" fontWeight={600} sx={{ mb: 6.25 }}>
            Digital Services
          </Typography>
          {service.map((item: SiteMap) => (
            <Typography key={item.path} sx={{ color: '#AAAAAA', mb: 2 }}>
              {item.label}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" fontWeight={600} sx={{ mb: 6.25 }}>
            Other Links
          </Typography>
          {otherLink.map((item: SiteMap) => (
            <Typography key={item.path} sx={{ color: '#AAAAAA', mb: 2 }}>
              {item.label}
            </Typography>
          ))}
        </Grid>
      </Grid>
      <div style={{ position: 'absolute', left: 0, bottom: 0 }}>
        <Image
          src={ILLandingBgBottom}
          alt="Illustration landing bg bottom"
          width={521}
        ></Image>
      </div>
    </>
  )
}
