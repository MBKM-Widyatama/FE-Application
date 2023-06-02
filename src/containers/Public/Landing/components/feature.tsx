import React from 'react'
import Image from 'next/image'

// MUI Components
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Assets
import {
  ICBrieftCase,
  ICGift,
  ICGlobe,
  ICSend2,
  ICTrello,
  ICWifiOff,
} from '@utama/assets'

export default function PageSignIn() {
  const features = [
    {
      icon: ICBrieftCase,
      title: 'Easy to Use',
      desc: 'Working together with your team to make decisions',
    },
    {
      icon: ICTrello,
      title: 'Easy to Use',
      desc: 'Working together with your team to make decisions',
    },
    {
      icon: ICSend2,
      title: 'Easy to Use',
      desc: 'Working together with your team to make decisions',
    },
    {
      icon: ICGift,
      title: 'Easy to Use',
      desc: 'Working together with your team to make decisions',
    },
    {
      icon: ICWifiOff,
      title: 'Easy to Use',
      desc: 'Working together with your team to make decisions',
    },
    {
      icon: ICGlobe,
      title: 'Easy to Use',
      desc: 'Working together with your team to make decisions',
    },
  ]

  return (
    <div style={{ width: '100%', textAlign: 'center', marginBottom: 140 }}>
      <div style={{ marginBottom: 60 }}>
        <Typography className="text-gradient" fontWeight={600}>
          Work Better
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontSize: 36, mt: 0.5, mb: 2.5 }}
        >
          For Your Future
        </Typography>
        <Typography style={{ color: '#575455', lineHeight: 2 }}>
          We did research what your company needs and
          <br />
          here we are providing all of them just for you
        </Typography>
      </div>
      <Grid container columnSpacing={13} rowSpacing={7.5} sx={{ px: 18.75 }}>
        {features.map(
          (item: { icon: any; title: string; desc: string }, index: number) => (
            <Grid
              item
              xs={4}
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                // alignItems: 'start',
              }}
            >
              <Image
                src={item.icon}
                alt={item.title}
                style={{ marginRight: 24 }}
              ></Image>
              <div style={{ textAlign: 'left' }}>
                <Typography
                  variant="h6"
                  style={{ margin: 0, marginBottom: 8, fontSize: 20 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  style={{
                    fontSize: 16,
                    color: '#575455',
                  }}
                >
                  {item.desc}
                </Typography>
              </div>
            </Grid>
          ),
        )}
      </Grid>
    </div>
  )
}
