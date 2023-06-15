import React from 'react'

// MUI Components
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'

// Custom Components
import Button from '@components/Button'

// MUI Icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

interface Props {
  open: boolean
  handleClose: any
  functionOnAgree: any
  title: string
  textOnAgree: string
  children: React.ReactNode
  minWidth?: number
  disable: boolean
  noDialogAction?: boolean
}

export default function FormDialog(props: Props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      PaperProps={{
        style: { borderRadius: 24 },
      }}
    >
      <DialogTitle
        sx={{
          minWidth: props.minWidth ?? 600,
          borderBottom: '1px solid #EEEEEE',
          pt: 3.75,
          pb: 2.5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 600,
        }}
      >
        {props.title}
        <IconButton onClick={props.handleClose}>
          <CloseRoundedIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pb: props.children ? 6 : 0 }}>
        {props.children}
      </DialogContent>
      {!props.noDialogAction && (
        <DialogActions sx={{ pt: 0, px: 4.75, pb: 4 }}>
          <Box sx={{ width: 240 }}>
            <Button
              fullwidth
              label={props.textOnAgree}
              color="primary"
              notRounded
              onClick={props.functionOnAgree}
            />
          </Box>
        </DialogActions>
      )}
    </Dialog>
  )
}
