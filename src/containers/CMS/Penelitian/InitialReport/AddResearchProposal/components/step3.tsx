import React, { useRef, useState } from 'react'

import { InitialReport } from '@services/penelitian/initialReport/types'

// MUI Components
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

// MUI Icons
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CancelIcon from '@mui/icons-material/Cancel'

interface Props {
  innerRef: any
}

interface Payload {
  lead_nrk: string
  lead_id: string
  lead_name: string
  member: { member_nrk: string; member_id: string; member_name: string }[]
}

export default function Step1(props: Props) {
  const initForm: Payload = {
    lead_nrk: '',
    lead_id: '',
    lead_name: '',
    member: [{ member_nrk: '', member_id: '', member_name: '' }],
  }
  const [form, setForm] = useState<Payload>(initForm)
  const [error, setError] = useState<any>('')

  function handleChange(e: any) {
    const { name, value } = e.target

    setForm((f) => ({
      ...f,
      [name]: value,
    }))

    setError((f: any) => ({
      ...f,
      [name]: '',
    }))
  }

  const sampleData = [
    { id: 'A', name: 'A' },
    { id: 'B', name: 'B' },
    { id: 'C', name: 'C' },
  ]

  const fileInputRef = useRef<any>(null)
  const [selectedFile, setSelectedFile] = useState<any>(null)

  const handleFileChange = (event: any) => {
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  const handleTextFieldClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <Grid container rowSpacing={2}>
      <Grid
        item
        container
        xs={12}
        columnSpacing={3}
        rowSpacing={2}
        sx={{ mb: 2 }}
      >
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            Upload Partner Willingness Letter
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Choose File"
            value={selectedFile ? selectedFile.name : ''}
            onClick={handleTextFieldClick}
            InputProps={{
              readOnly: true,
              style: { fontSize: 14, height: 46 },
            }}
          />

          <input
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            Upload Assignment Letter
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Choose File"
            value={selectedFile ? selectedFile.name : ''}
            onClick={handleTextFieldClick}
            InputProps={{
              readOnly: true,
              style: { fontSize: 14, height: 46 },
            }}
          />

          <input
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            Upload Assignment Letter
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Choose File"
            value={selectedFile ? selectedFile.name : ''}
            onClick={handleTextFieldClick}
            InputProps={{
              readOnly: true,
              style: { fontSize: 14, height: 46 },
            }}
          />

          <input
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </Grid>
      </Grid>

      <button
        ref={props.innerRef}
        style={{ display: 'none' }}
        onClick={() => console.log('ok')}
      >
        Submit
      </button>
    </Grid>
  )
}
