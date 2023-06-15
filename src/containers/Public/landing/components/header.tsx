import React from 'react'
import Image from 'next/image'

// MUI Components
import Typography from '@mui/material/Typography'

// Custom Components
import Button from '@components/Button'

// assets
import { ILLandingBgHeader } from '@utama/assets/ilustrations'

export default function PageSignIn() {
  return (
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        marginBottom: 140,
      }}
    >
      <Image src={ILLandingBgHeader} alt="bg-header" fill></Image>
      <Typography
        variant="h3"
        sx={{
          marginBottom: 2.5,
          paddingTop: 11.5,
          lineHeight: 1.3,
        }}
        className="font-heading-pro-wide"
      >
        Let’s upload your
        <span className="text-gradient font-heading-pro-wide"> journal</span>,
        <br /> and start
        <span className="text-gradient font-heading-pro-wide">
          {' '}
          contributing
        </span>
        <br /> to the
        <span className="text-gradient font-heading-pro-wide"> world</span>
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'normal',
          color: '#AAAAAA',
          marginBottom: 7.5,
        }}
      >
        Let&apos;s discover new knowledge and new friends and have a learning
        <br />
        experience with beautiful teachers
      </Typography>

      <Button label="Get Started" onClick={() => {}} />
    </div>
  )
}
