import React from 'react'
import Image from 'next/image'

// MUI Components
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// assets
import { ILSampleArticleCover } from '@utama/assets/ilustrations'

export default function SectionNews() {
  const sampleLabels = [
    'Self Improvement',
    'Writing',
    'Productivity',
    'Relationships',
    'Politics',
    'Education',
  ]

  return (
    <Grid container sx={{ p: 12.5, pt: 7.5 }}>
      <Grid item xs={12} sx={{ display: 'flex', mb: 5 }}>
        <Typography fontWeight={600}>BIMAUTAMA</Typography>
        <Typography fontWeight={600} sx={{ mx: 1.5 }}>
          {'>'}
        </Typography>
        <Typography style={{ color: '#AAAAAA' }}>News</Typography>
      </Grid>
      <Grid item container xs={8} rowSpacing={6.5}>
        {[1, 2, 3].map((item: any) => (
          <Grid item container key={item}>
            <Grid item xs={7}>
              <Typography variant="h5" fontWeight={600} sx={{ mb: 2.5 }}>
                Pengumuman Peserta FGA - Bootcamp Batch 1 Tahun 2023
              </Typography>
              <Typography
                variant="body2"
                fontWeight={300}
                sx={{ color: '#757575', mb: 3 }}
              >
                Hello BIMAUTAMAS! Selamat! Bagi Anda yang terpilih sebagai
                Peserta Bootcamp Fresh Graduate Academy Digital Talent
                Scholarship Batch 1 Tahun 2023 (FGA DTS), program ...
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant="body2"
                  fontWeight={300}
                  sx={{ color: '#757575' }}
                >
                  16 March 2023
                </Typography>
                <Box
                  width={6}
                  height={6}
                  borderRadius={100}
                  bgcolor="#D9D9D9"
                  mx={2.5}
                ></Box>
                <Box
                  borderRadius={16}
                  bgcolor="#F2F2F2"
                  px={1.5}
                  py={1}
                  fontSize={12}
                >
                  Relationships
                </Box>
              </Box>
            </Grid>
            <Grid xs={5} sx={{ position: 'relative' }}>
              <Image
                src={ILSampleArticleCover}
                alt="sample"
                fill
                style={{ borderRadius: 4, paddingLeft: 34 }}
              ></Image>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid xs={4} sx={{ pl: 7.25 }}>
        <Typography fontWeight={600} sx={{ mb: 4 }}>
          Discover more of what matters to you
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {sampleLabels.map((item: any) => (
            <Box
              key={item}
              bgcolor="#F2F2F2"
              borderRadius={16}
              px={1.5}
              py={1}
              fontSize={12}
              mr={1}
              mb={1.5}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  )
}
