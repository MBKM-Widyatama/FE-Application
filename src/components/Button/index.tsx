import React from 'react'
import MuiButton from '@mui/material/Button'

interface ButtonProps {
  label: string
  onClick: () => void
  color?: 'primary' | 'error'
  fullwidth?: boolean
  rounded?: boolean
}

export default function Button(props: ButtonProps) {
  return (
    <MuiButton
      fullWidth={props.fullwidth}
      color={props.color ?? 'primary'}
      variant="contained"
      onClick={props.onClick}
      sx={{
        fontSize: 14,
        fontWeight: 500,
        textTransform: 'capitalize',
        borderRadius: !props.rounded ? 50 : 0,
        background: 'linear-gradient(89.11deg, #2C5BF7 1.73%, #40B4FD 98.05%)',
        boxShadow: 'none',
        padding: '0 28px',
        height: 46,
      }}
    >
      {props.label}
    </MuiButton>
  )
}
